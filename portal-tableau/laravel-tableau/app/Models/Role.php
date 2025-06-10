<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;

class Role extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $fillable = [
        'id',
        'name',
        'guard_name',
    ];

    public function getIDAttribute()
    {
        return $this->attributes['id'];
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'role_has_permissions');
    }
}
