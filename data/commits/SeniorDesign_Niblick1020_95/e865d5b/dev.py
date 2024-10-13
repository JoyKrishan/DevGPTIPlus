
def write_files_to_csv(file_counts, output_file):
    fileOutput = 'data/file_' + file + '.csv'
    rows = ["Filename", "Touches"]
    fileCSV = open(fileOutput, 'w')
    writer = csv.writer(fileCSV)
    writer.writerow(rows)

    bigcount = None
    bigfilename = None
    for filename, count in dictfiles.items():
        rows = [filename, count]
        writer.writerow(rows)
        if bigcount is None or count > bigcount:
            bigcount = count
            bigfilename = filename
    fileCSV.close()
    print('The file ' + bigfilename + ' has been touched ' + str(bigcount) + ' times.')

if __name__ == '__main__':
    lstTokens = ["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"]
    dictfiles = dict()
    countfiles(dictfiles, lstTokens, repo)
    print('Total number of files: ' + str(len(dictfiles)))
    file = repo.split('/')[1]
    file_output = f'data/file_{file}.csv'
    write_files_to_csv(dictfiles, file_output)