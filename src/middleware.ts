import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";
var jose = require('jose');

export async function middleware(request:any) {
    const jwt = request.cookies.get("myTokenName");

    if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

    // this condition avoid to show the login page if the user is logged in
    // if (jwt) {
    //   if (request.nextUrl.pathname.includes("/login")) {
    //     try {
    //       await jwtVerify(jwt, new TextEncoder().encode("secret"));
    //       return NextResponse.redirect(new URL("/dashboard", request.url));
    //     } catch (error) {
    //       return NextResponse.next();
    //     }
    //   }
    // }
    
    
    try {
        console.log(jwt);
        const { payload } = await jose.jwtVerify(
            jwt.value,
            new TextEncoder().encode("secret")
        );
        console.log({ payload });
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/projects/:path*"],
};
