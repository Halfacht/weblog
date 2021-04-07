<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'user_id',
        'is_premium',
    ];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['user', 'categories'];

    #region Relationships

    public function user()
    {
        return $this->belongsTo(User::class)
            ->select(['id', 'name']);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)
            ->latest();
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    #endregion
}
