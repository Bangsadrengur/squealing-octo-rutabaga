echo "Scripted deployment starting"
for FILE in dist/*; do curl --ftp-create-dirs -T $FILE -u $FTP_USER:$FTP_PASSWORD "ftp://$FTP_PATH/$(basename $FILE)"; done
echo $?
echo "Scripted deployment done"
