<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    #region Relationships

    public function blogs()
    {
        return $this->belongsToMany(Blog::class);
    }

    #endregion
}
