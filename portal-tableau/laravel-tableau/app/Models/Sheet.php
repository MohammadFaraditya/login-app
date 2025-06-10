<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;

class Sheet extends Model
{
    use HasFactory;

    protected $primaryKey = 'idsheet';

    protected $table = 'sheet';

    protected $fillable = [
        'idsheet',
        'name',
        'sheetName',
        'permission_id',
    ];

    public function permission()
    {
        return $this->belongsTo(Permission::class, 'permission_id');
    }
}
