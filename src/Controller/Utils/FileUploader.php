<?php
/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> (+225 0778329592)
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */

namespace App\Controller\Utils;

use App\Entity\Directory;
use App\Service\LetImage;
use Psr\Cache\InvalidArgumentException;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

trait FileUploader
{

    /**
     * @param UploadedFile $file
     * @param Directory $directory
     * @param SluggerInterface $slugger
     * @param string $dir_key
     * @param string $type
     * @return string[]
     */
    public function fileUpload(UploadedFile $file, Directory $directory, SluggerInterface $slugger, string $dir_key = self::STORAGE_FOLDER_KEY, string $type = 'image'): array
    {

        $target = $this->getParameter($dir_key);
        $app_url = $this->getParameter(self::APP_URL_KEY);
        //$_target = $this->pathNormalize($target);
        $_target = $directory->getLocation();

        $newFileName = uniqid('df_before_resize_') . '.' . $file->getClientOriginalExtension();
        $_newFileName = uniqid('df_') . uniqid('_design_');
        $path = $_target . $newFileName;

        try {
            $file->move(rtrim($_target, "/"), $newFileName);

            if ($type === "image") {
                $imageResize = new LetImage();
                $newFileName = $imageResize->src($path)
                    ->resize($directory->getWidth(), $directory->getHeight())
                    ->destroyOldSource()
                    ->save($_newFileName, "df_design_", $_target);
            }
        } catch (FileException $e) {

        }

        return [
            'path' => $path,
            'url' => $app_url . '/' . $target[0]['name'] . $this->extractDirectoryRootNameByLocation($_target) . $slugger->slug($directory->getName(), '_') . '/' . $newFileName
        ];
    }


    /**
     * @param string $path
     * @return bool
     * @throws InvalidArgumentException
     */
    public function deleteFileByPath(string $path): bool
    {
        if (file_exists($path)) {
            @unlink($path);
            Cache::destroyKey(new FilesystemAdapter(), Cache::STORAGE_KEY);
            return true;
        } else return false;
    }

    public function getStorageFolderSize(): string
    {
        $storage_dir = $this->getParameter(self::STORAGE_FOLDER_KEY);
        return $this->foldSizeFormat($this->getFolderSize($storage_dir[0]['path']));
    }

    /**
     * @param string $path
     * @return float
     */
    public function getFolderSize(string $path): float
    {
        $final_size = 0;
        foreach (array_diff(scandir($path), ["..", "."]) as $filename) {
            $newPath = $path . '/' . $filename;
            if (is_file($newPath)) {
                $final_size += filesize($newPath);
            } elseif (is_dir($newPath)) {
                $final_size += $this->getFolderSize($newPath);
            }
        }
        return $final_size;
    }

    /**
     * @param float $size
     * @return string
     */
    private function foldSizeFormat(float $size): string
    {
        $result = "";

        foreach ($this->unit() as $unit => $value) {
            if ($size >= $value) {
                $result = $size / $value;
                $result = str_replace(".", ",", strval(round($result, 2))) . "" . $unit;
                break;
            }
        }
        return $result;
    }

    private function unit(): array
    {
        return [
            " To" => pow(1024, 4),
            " Go" => pow(1024, 3),
            " Mo" => pow(1024, 2),
            " Ko" => pow(1024, 1),
            " octet(s)" => 2,
            " octet" => 1,
        ];
    }

    /**
     * @param array $target
     * @return string|string[]
     */
    private function pathNormalize(array $target)
    {
        $public_dir = $this->getParameter(self::PUBLIC_FOLDER_KEY);
        return str_replace("/", DIRECTORY_SEPARATOR, $public_dir[0]['path'] . '/' . $target[0]['path'] . DIRECTORY_SEPARATOR);
    }

    /**
     * @param string $path
     * @return string
     */
    function extractDirectoryRootNameByLocation(string $path): string
    {
        $_str = trim(substr($path, strpos($path, 'storage') + 7), '/');
        return '/' . substr($_str, 0, strrpos($_str, '/')) . '/';
    }
}