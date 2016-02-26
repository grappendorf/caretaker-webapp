#!/bin/bash

confd --onetime
/usr/sbin/nginx -g 'daemon off;'
