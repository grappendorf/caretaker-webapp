#!/bin/sh

confd --onetime
nginx -g 'daemon off;'
