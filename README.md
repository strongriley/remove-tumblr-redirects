# remove-tumblr-redirects

UPDATE: Tumblr has fixed the issue on their end so this is not necessary anymore.

Tumblr rewrites all outbound URLs and doesn't properly handle URL encoding (e.g. + signs). 
This snippet strips Tumblr URL redirects out. Place it below the </body> tag.
