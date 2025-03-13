<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the authenticated user has role 1 or 2
        if (auth()->user()->role === 0) {
            return redirect()->route('my.account');

        }elseif  (  auth()->user()->role !== 1 && auth()->user()->role !== 2 ){

            return redirect()->route('role.logout');
        }


        return $next($request);
    }
}
