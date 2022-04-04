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

namespace App\Service;


class LetImage
{
    /**
     * @var resource gb
     */
    private $_src;
    /**
     * @var resource gb
     */
    private $_tampon;
    /**
     * @var string
     */
    private $_type;
    /**
     * @var string
     */
    private $_extension;
    /**
     * @var int|float
     */
    private $_width;
    /**
     * @var int|float
     */
    private $_height;

    private $_source_path;


    /**
     * @param string $FileName
     * @return LetImage|null
     */
    public function src(string $FileName): ?self
    {
        if (file_exists($FileName)) {
            $this->_source_path = $FileName;
            $type = explode('/', getimagesize($FileName)['mime'])[0];
            if ($type !== 'image') {
                trigger_error('it is not file', E_USER_ERROR);
            } else {
                [$width, $height] = getimagesize($FileName);
                $this->setType($type);
                $this->setExtension(image_type_to_extension(getimagesize($FileName)[2]));
                $this->setWidth($width);
                $this->setHeight($height);

                if ($this->getExtension() == '.jpeg')
                    $this->setSrc(@imagecreatefromjpeg($FileName));
                elseif ($this->getExtension() == '.png')
                    $this->setSrc(@imagecreatefrompng($FileName));
                elseif ($this->getExtension() == '.gif')
                    $this->setSrc(@imagecreatefromgif($FileName));

            }
            return $this;
        } else {
            trigger_error("File do not found line " . __LINE__, E_USER_ERROR);
            return null;
        }
    }

    /**
     * @param $width
     * @param $height
     * @return LetImage
     */
    public function resize($width, $height): self
    {
        $this->setTampon(imagecreatetruecolor($width, $height));
        imagecopyresampled($this->getTampon(), $this->getSrc(),
            0, 0, 0, 0, $width, $height, $this->_width, $this->_height);
        return $this;
    }

    /**
     * @param $angle
     * @return LetImage
     */
    public function rotate($angle): self
    {
        $this->setTampon(imagerotate($this->getSrc(), $angle, 0));
        if ($this->getTampon() === false) {
            trigger_error('an error occurred at the line' . __FILE__, E_USER_ERROR);
        }
        return $this;
    }

    /**
     * @param string $extension
     * @return LetImage
     */
    public function convert(string $extension): self
    {
        $TYPE = ['.png', '.gif', '.jpeg'];
        if (in_array($_extension = strtolower('.' . $extension), $TYPE)) {
            $this->setExtension($_extension);
            $this->setTampon(imagecreatetruecolor($this->getWidth(), $this->getHeight()));
            imagecopy($this->getTampon(), $this->getSrc(),
                0, 0, 0, 0, $this->getWidth(), $this->getHeight());
            return $this;
        } else {
            trigger_error('an error occurred at the line' . __FILE__, E_USER_ERROR);
            exit(404);
        }

    }

    public function copy()
    {
        $this->setTampon(imagecreatetruecolor($this->getWidth(), $this->getHeight()));
        $is_copy = imagecopy($this->getTampon(),
            $this->getSrc(), 0, 0, 0, 0, $this->getWidth(), $this->getHeight());
        if ($is_copy === false) {
            trigger_error('an error occurred at the line' . __FILE__);
            die();
        }
    }

    /**
     * @return $this
     */
    public function destroyOldSource(): self
    {
        @unlink($this->_source_path);
        return $this;
    }

    /**
     * @param string|null $FileName
     * @param string $prefix
     * @param string $dir
     * @return bool
     */
    public function save(?string $FileName = null, string $prefix = 'sicama_', string $dir = './')
    {
        $response = false;
        if (is_null($FileName)) {
            $FileName = substr(uniqid('df_'), 0, 10);
        } else {
            $FileName = $prefix . $FileName;
        }
        // create path
        $path = $dir . $FileName . $this->getExtension();
        if ($this->getExtension() == '.jpeg') {
            $response = imagejpeg($this->getTampon(), $path);
        } elseif ($this->getExtension() == '.png') {
            $response = imagepng($this->getTampon(), $path);
        } elseif ($this->getExtension() == '.gif') {
            $response = imagegif($this->getTampon(), $path);
        }
        // destroy image
        imagedestroy($this->getTampon());
        imagedestroy($this->getSrc());

        return $FileName . $this->getExtension(); // finally response
    }


    /**
     * @return mixed
     */
    private function getSrc()
    {
        return $this->_src;
    }

    /**
     * @param mixed $src
     */
    private function setSrc($src): void
    {
        $this->_src = $src;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->_type;
    }

    /**
     * @param mixed $type
     */
    private function setType($type): void
    {
        $this->_type = $type;
    }

    /**
     * @return string
     */
    public function getExtension(): string
    {
        return $this->_extension;
    }

    /**
     * @param mixed $extension
     */
    public function setExtension($extension): void
    {
        $this->_extension = $extension;
    }

    /**
     * @return mixed
     */
    public function getWidth()
    {
        return $this->_width;
    }

    /**
     * @param mixed $width
     */
    public function setWidth($width): void
    {
        $this->_width = $width;
    }

    /**
     * @return mixed
     */
    public function getHeight()
    {
        return $this->_height;
    }

    /**
     * @param mixed $height
     */
    public function setHeight($height): void
    {
        $this->_height = $height;
    }

    /**
     * @return mixed
     */
    private function getTampon()
    {
        return $this->_tampon;
    }

    /**
     * @param $tampon
     */
    private function setTampon($tampon): void
    {
        $this->_tampon = $tampon;
    }

    public function remove(): bool
    {
        return unlink($this->_type);
    }
}