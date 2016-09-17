/**
 * Sets a Cookie with the given name and value.
 *
 * name       Name of the cookie
 * value      Value of the cookie
 * [expires]  Expiration date of the cookie (default: end of current session)
 * [path]     Path where the cookie is valid (default: path of calling document)
 * [domain]   Domain where the cookie is valid
 *              (default: domain of calling document)
 * [secure]   Boolean value indicating if the cookie transmission requires a
 *              secure transmission
 */
function setCookie(name, value, expires, path, domain, secure)
{
    document.cookie=name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "; path=/") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function setRootCookie(name, value, expires, path, domain, secure)
{
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        "; path=/" +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 */
function getCookie(name)
{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin !== 0)
        {
          return null;
        }
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

/**
 * Deletes the specified cookie. Will only perform the deletion if
 *
 *   a) The cookie exists in the current path; or
 *   b) The alwaysDelete flag is specified
 *
 * name           name of the cookie
 * [path]         path of the cookie (must be same as path used to create cookie)
 * [domain]       domain of the cookie (must be same as domain used to create cookie)
 * [alwaysDelete] if true, delete the cookie whether it exists in the current path, or not
 */
function deleteCookie(name, path, domain, alwaysDelete)
{
    if (getCookie(name) || alwaysDelete)
    {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=" + new Date(1).toGMTString();
    }
}

