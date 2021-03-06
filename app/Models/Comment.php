<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'blog_id'
    ];

    #region Relationships

    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }

    #endregion
}
