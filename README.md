

1. Delete '.txt' on file '.env.txt' and then enter your Firebase Credentials 
2. Enter routes to protect and/or redirect in lib->shield

Example:
    const privateRoutes = ["/dashboard"];
    const privateRedirect = "/auth/login";

    const authRoutes = ["/auth/login","auth/register"];
    const authRedirect = "/dashboard";

ROUTE               isAUTH      ACTION

"/dashboard"        TRUE        NOTHING HAPPEND
"/dashboard"        FALSE       REDIRECT TO -> "/auth/login"

"/auth/login"       TRUE        REDIRECT TO -> "/dashboard"
"/auth/login"       FALSE       NOTHING HAPPEND  

"/auth/register"    TRUE        REDIRECT TO -> "/dashboard"
"/auth/register"    FALSE       NOTHING HAPPEND 


3. (Optional) You can use the LoadingToRedirect.jsx in components/commons
