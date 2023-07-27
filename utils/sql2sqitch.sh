#!/bin/bash

cd $(pwd)

source="$(pwd)/compracomigo.sql"

[[ ! -f "$source" ]] && exit 1

MIGRATIONS="$(pwd)/migrations"


files=$(
    awk 'BEGIN {
            current=""
            old=""
        }
        /create table/ {
            split($3,arr, ".")
            print arr[2]
        }
        # /create table/,/;/ {
        #     split($3,arr, ".")

        #     table=arr[2]

        #     gsub(/ /, table)
        #     print

        #     # if (index($0, "create") == 0) {
        #     #     if (index($0, ";") == 0) {
        #     #         print "C ", $0
        #     #     }
        #     # }
        # }
    ' "$source"
)

for table in $files
do 
    [[ ! -f "$MIGRATIONS/$table" ]] \
        && sqitch add $table -t createtable -m "adding $table table"
done
