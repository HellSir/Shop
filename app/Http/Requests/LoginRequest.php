<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends BaseRequest
{
    public function rules()
    {
        return [
            'email'=>'string|required',
            'password'=>'string|required'
        ];
    }
}
