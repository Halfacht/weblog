<?php

namespace App\Traits;

trait HasRoles {

    public function isWriter()
    {
        return $this->role == 1;
    }
}