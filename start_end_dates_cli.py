import sys
from getopt import getopt
import regex

def start_end_dates():
    start = None
    end = None

    argv = sys.argv[1:]  #filename is discarded

    options,args = getopt(argv,"s:e:")
    print(options)
    start,end = options
    start = start[1]
    end = end[1]
    print(start,end)


if __name__ == '__main__':
    start_end_dates()
    print(__name__)