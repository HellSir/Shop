<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductsResource;

class ProductsController extends Controller
{

    public function newProduct(Request $request)
    {
        $product = Product::create([
            'name'=>$request->name,
            'price'=>$request->price,
            'old_price'=>$request->old_price,
            'color'=>$request->color,
            'quantity'=>$request->quantity,
            'stars'=>$request->stars,
            'category'=>$request->category,
            'description'=>$request->description,
            'details'=>$request->details,
            'sales'=>$request->sales,
            'reviews'=>$request->reviews,
        ]);
        return response('Created',200);
    }

    public function products (Request $request)
    {
        $product = Product::where(['price'=>$request->price])->get();

        return new ProductsResource($product);

    }
}
