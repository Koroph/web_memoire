<?php

namespace App\Controller\Utils;

class Query
{

    public const EQUIPMENT_STATE = /** @lang SQL */
        "SELECT 
            COUNT(CASE WHEN `status`=\"be\" THEN 0 END) be,
            COUNT(CASE WHEN `status`=\"pe\" THEN 0 END) pe,
            COUNT(CASE WHEN `status`=\"me\" THEN 0 END) me,
            COUNT(CASE WHEN `status`=\"re\" THEN 0 END) re
          FROM equipment 
         ";
}