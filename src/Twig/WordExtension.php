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

use App\Service\SentenceInitial;
use Symfony\Component\Uid\Uuid;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class WordExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('word_initial', [$this, 'wordInitial']),
            new TwigFilter('hourFormat', [$this, 'hourFormat']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('registration_number', [$this, 'generateRegistrationNumber']),
            new TwigFunction('id', [$this, 'random_id']),
            new TwigFunction('roles_raw', [$this, 'rolesRaw']),
            new TwigFunction('menu_links', [$this, 'menuLink'])
        ];
    }

    public function hourFormat($time)
    {
        $minute = intval($time) % 60;
        $hour = (intval($time) - $minute) / 60;

        if ($hour < 10) $hour = "0" . $hour;
        if ($minute < 10) $minute = "0" . $minute;

        return "" . $hour . ":" . $minute;
    }

    public function wordInitial($name): string
    {
        $si = new SentenceInitial($name);
        $color = $si->getInitialRGB();
        $_color = $si->getInitialNextRGB();
        $initial = $si->getInitial();
        if (!is_null($initial))
            return '<div class="image_profile-initial" style="background: linear-gradient(45deg,' . $color . ',' . $_color . ');">
                    <strong>' . $initial . '</strong>
                 </div>';
        else return "";
    }

    public function rolesRaw(array $roles = []): array
    {
        return [
            [
                "label" => "Administrateur",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_ADMIN_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ADMIN_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Enrégistrement",
                            "value" => "ROLE_ADMIN_CREATE",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ADMIN_CREATE", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_ADMIN_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ADMIN_EDIT", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_ADMIN_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ADMIN_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => "Service",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_SERVICE_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_SERVICE_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_SERVICE_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_SERVICE_EDIT", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => " Facturation",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_BILLING_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_BILLING_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Enrégistrement",
                            "value" => "ROLE_BILLING_CREATE",
                            "disabled" => false,
                            "checked" => in_array("ROLE_BILLING_CREATE", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_BILLING_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_BILLING_EDIT", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_BILLING_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_BILLING_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => "Prestataire",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_SERVICE_PROVIDER_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_SERVICE_PROVIDER_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Enrégistrement",
                            "value" => "ROLE_SERVICE_PROVIDER_CREATE",
                            "disabled" => false,
                            "checked" => in_array("ROLE_SERVICE_PROVIDER_CREATE", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_SERVICE_PROVIDER_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_SERVICE_PROVIDER_EDIT", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_SERVICE_PROVIDER_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_SERVICE_PROVIDER_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => "Opérateur",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_OPERATOR_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_OPERATOR_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Enrégistrement",
                            "value" => "ROLE_OPERATOR_CREATE",
                            "disabled" => false,
                            "checked" => in_array("ROLE_OPERATOR_CREATE", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_OPERATOR_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_OPERATOR_EDIT", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_OPERATOR_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_OPERATOR_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => "Free card",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_FREE_CARD_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_FREE_CARD_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_FREE_CARD_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_FREE_CARD_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => "Compte",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_ACCOUNT_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ACCOUNT_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Enrégistrement",
                            "value" => "ROLE_ACCOUNT_CREATE",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ACCOUNT_CREATE", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_ACCOUNT_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ACCOUNT_EDIT", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_ACCOUNT_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_ACCOUNT_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ],
            [
                "label" => "Rechargement",
                "name" => "role",
                "value" => [
                    "disabled" => false,
                    "checked" => false,
                    "value" => [
                        [
                            "label" => "Affichage",
                            "value" => "ROLE_RECHARGE_SHOW",
                            "disabled" => false,
                            "checked" => in_array("ROLE_RECHARGE_SHOW", $roles) ?? false
                        ],
                        [
                            "label" => "Enrégistrement",
                            "value" => "ROLE_RECHARGE_CREATE",
                            "disabled" => false,
                            "checked" => in_array("ROLE_RECHARGE_CREATE", $roles) ?? false
                        ],
                        [
                            "label" => "Edition",
                            "value" => "ROLE_RECHARGE_EDIT",
                            "disabled" => false,
                            "checked" => in_array("ROLE_RECHARGE_EDIT", $roles) ?? false
                        ],
                        [
                            "label" => "Suppression",
                            "value" => "ROLE_RECHARGE_DESTROY",
                            "disabled" => false,
                            "checked" => in_array("ROLE_RECHARGE_DESTROY", $roles) ?? false
                        ]
                    ]
                ]
            ]
        ];
    }

    public function generateRegistrationNumber(): string
    {
        $uuid = explode("-", Uuid::v1()->toRfc4122());
        return strtoupper(current($uuid));
    }

    public function random_id(): string
    {
        $uuid = explode("-", Uuid::v1()->toRfc4122());
        return strtolower(current($uuid)) . '_' . strtolower(end($uuid));
    }

    public function menuLink(): array
    {
        return [
            [
                "icon" => "icon-home2",
                "title" => "Accueil",
                "path" => "admin_home",
                "pathOther" => [],
                "permission" => "ROLE_HOME_SHOW",
                "hr" => true
            ],
            [
                "icon" => "icon-user-tie",
                "title" => "Administrateur",
                "path" => "user_admin",
                "pathOther" => [],
                "permission" => "ROLE_ADMIN_SHOW",
                "hr" => true
            ],
            [
                "icon" => "icon-ticket",
                "title" => "Service",
                "path" => "service",
                "pathOther" => [],
                "permission" => "ROLE_SERVICE_SHOW",
                "hr" => false
            ],
            [
                "icon" => "icon-lifebuoy",
                "title" => "Facturation",
                "path" => "billing",
                "pathOther" => [],
                "permission" => "ROLE_BILLING_SHOW",
                "hr" => true
            ],
            [
                "icon" => "icon-spoon-knife",
                "title" => "Prestataire",
                "path" => "service_provider",
                "pathOther" => [],
                "permission" => "ROLE_SERVICE_PROVIDER_SHOW",
                "hr" => false
            ],
            [
                "icon" => "icon-user-plus",
                "title" => "Opérateur",
                "path" => "operator",
                "pathOther" => [],
                "permission" => "ROLE_OPERATOR_SHOW",
                "hr" => true
            ],
            [
                "icon" => "icon-credit-card",
                "title" => "Free card",
                "path" => "free_card",
                "pathOther" => [],
                "permission" => "ROLE_FREE_CARD_SHOW",
                "hr" => true
            ],
            [
                "icon" => "icon-briefcase",
                "title" => "Compte",
                "path" => "account",
                "pathOther" => [],
                "permission" => "ROLE_ACCOUNT_SHOW",
                "hr" => false
            ],
            [
                "icon" => "icon-flag",
                "title" => "Recharger de carte",
                "path" => "recharge",
                "pathOther" => [],
                "permission" => "ROLE_RECHARGE_SHOW",
                "hr" => true
            ],
            [
                "icon" => "icon-stats-dots",
                "title" => "Etat",
                "path" => "admin_home",
                "pathOther" => [],
                "permission" => "ROLE_REPORT_SHOW",
                "hr" => false
            ]
        ];
    }

}
