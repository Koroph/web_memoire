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

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class LinkExtension extends AbstractExtension
{

    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('link_active', [$this, 'linkActive']),
            new TwigFilter('next', [$this, 'next']),
            new TwigFilter('previous', [$this, 'previous'])
        ];
    }


    public function getFunctions(): array
    {
        return [
            new TwigFunction('tr_action', [$this, 'trAction']),
            new TwigFunction('image_profile', [$this, 'image_profile']),
        ];
    }

    public function trAction(?string $show = null, ?string $edit = null, ?string $delete = null,bool $disabled=false): string
    {
        $trBuilder = '<td class="kh-action">';
        if (!is_null($show)) $trBuilder .= '<a href="' . $show . '" title="Afficher" class="icon-eye"></a>';
        if (!is_null($edit)) $trBuilder .= '<a href="' . $edit . '" title="Editer" class="icon-pencil"></a>';
        if (!is_null($delete)) $trBuilder .= '<form  action="' . $delete . '" method="post">
                                                  <input type="hidden" name="_method" value="delete">
                                                  <button '.($disabled ? "disabled":"").' class="icon-bin destroy-item" type="button"></button>
                                               </form>';
        $trBuilder .= '</td>';
        return $trBuilder;
    }

    public function linkActive($routeName, string $name, array $add = []): string
    {

        if (strrpos($name, ".") !== false)
            return $routeName === $name ? "active" : "";

        $link_name = [
            "$name.index",
            "$name.create",
            "$name.edit",
            "$name.show",
            "$name._index",
            "$name._create",
            "$name._edit",
            "$name._show"
        ];
        if (!empty($add)) {
            foreach ($add as $item) {
                if (strrpos($item, ".") === false) array_push($link_name, ...$this->linkAction($item));
                else  array_push($link_name, $item);
            }
        }
        return in_array($routeName, $link_name) ? "active" : "";
    }


    public function previous($url, string $_index): string
    {
        $index = intval($_index);
        if ($index > 1) {
            $previousIndex = $index - 1;
            $_url = str_replace("page=$index", "page=$previousIndex", $url);
            return '<a href="' . $_url . '" class="icon-arrow-left2" title="Précédent"></a>';
        } else return '<a href="#" disabled class="icon-arrow-left2 disabled" title="Précédent"></a>';
    }
    public function webLinkItem($url, string $index,string $current): string
    {
        $_url = explode('?',$url)[0].'?page='.$index;
        if ($current==$index) return '<a class="active" href="'.$_url.'">'.$index.'</a>';
        else return '<a href="'.$_url.'">'.$index.'</a>';
    }

    public function next($url, string $_index, int $total): string
    {
        $index = intval($_index);
        if ($index < $total) {
            $nextIndex = $index + 1;
            if (strpos($url, "page=") === false) $url = trim($url, "#") . "?page=$index";
            $_url = str_replace("page=$index", "page=$nextIndex", $url);
            return '<a href="' . $_url . '" class="icon-arrow-right2" title="Suivant"></a>';
        } else return '<a disabled class="icon-arrow-right2 disabled" title="Suivant"></a>';
    }


    public function image_profile(string $name = "", string $url = null, string $rounded = "", string $width = "64px", string $fontSize = "1.2rem", string $scale = "1"): string
    {

        $_data = '<div class="image_profile ' . $rounded . '" style="width: ' . $width . ';height: ' . $width . ';font-size: ' . $fontSize . ';transform: scale(' . $scale . ');">';

        if (!is_null($url)) $_data .= '<img src="' . $url . '" alt="">';
        else $_data .= (new WordExtension())->wordInitial($name);
        $_data .= '</div>';
        return $_data;
    }

    /**
     * @param string $name
     * @return string[]
     */
    private function linkAction(string $name): array
    {
        return [
            "$name.index",
            "$name.create",
            "$name.edit",
            "$name.show",
        ];
    }

}
