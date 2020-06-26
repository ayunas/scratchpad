import sys
from getopt import getopt
# import regex

def start_end_dates():
    start = None
    end = None

    argv = sys.argv[1:]  #filename is discarded

    options,args = getopt(argv,"s:e:",["startdate=","enddate="])
    for (opt,arg) in options:
        if opt in ("-s","--startdate"):
            start = arg
        elif opt in ('-e','--enddate'):
            end = arg

    print('start date: ', start)
    print('end date', end)
    



if __name__ == '__main__':
    start_end_dates()
    print(__name__)