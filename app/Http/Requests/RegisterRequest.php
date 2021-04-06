<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends BaseRequest
{

    public function rules()
    {
        return [
            'name'=>'string|required',
            'email'=>'string|required|unique:users,email',
            'password'=>'string|required',
            'surname'=>'string|required',
            'address'=>'string|required',
            'city'=>'string|required',
            'zip_code'=>'string|required',
            'phone'=>'string|required|unique:users,phone',
            'country'=>'string|required',
        ];
    }
}
