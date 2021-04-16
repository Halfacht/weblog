<?php

namespace App\Models;

use App\Traits\HasRoles;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    #region Attributes

    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['isWriter'];

    #endregion Attributes

    #region Accessors & Mutators

    public function getIsWriterAttribute(): bool
    {
        return $this->role === '1' || $this->role === 1;
    }

    public function getSubscribedAttribute(): bool
    {
        return $this->subscription && $this->subscription->end_date === null;
    }

    public function getCanSeePremiumContentAttribute(): bool
    {
        return $this->subscription &&
            ($this->subscription->end_date === null
                || $this->subscription->end_date > Carbon::now());
    }

    #endregion

    #region Relationships

    public function subscription(): HasOne
    {
        return $this->hasOne(Subscription::class);
    }

    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class);
    }

    #endregion Relationships

    # region Scopes

    public function scopeWriters($query)
    {
        return $query->where('role', 1);
    }

    #endregion
}
