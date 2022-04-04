<?php
/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */

namespace App\Controller\Utils;


class Notice
{
   public const KEY_DANGER = "notice.app.key.danger";
   public const KEY_WARNING = "notice.app.key.warning";
   public const KEY_ERRORS = "validate_errors";
   public const KEY_SUCCESS = "notice.app.key.success";
   public const DELETE = "Suppression effectué avec sucés";
   public const UPDATE = "Mise à jour effectuée avec sucés";
   public const CREATE = "Enregistrement effectué avec sucés";
   public const ERRORS = "Le service c'est momentanément arrêté,veuillez réessayer plu tard";
}