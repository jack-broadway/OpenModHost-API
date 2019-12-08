export DEBIAN_FRONTEND=noninteractive
# Ensure hostname is recognised
sudo sed -i "s/^127\.0\.0\.1.*/127.0.0.1 localhost $HOSTNAME/g" /etc/hosts

# Set Timezone
sudo timedatectl set-timezone Australia/Brisbane

# Set mirror to AUS
sudo sed -i "s/http:\/\/.*archive.ubuntu/http:\/\/au.archive.ubuntu/g" /etc/apt/sources.list

# Update and install deps
sudo -E apt-get -y -q update
sudo -E apt-get -y -q install curl software-properties-common build-essential software-properties-common apt-transport-https ca-certificates curl
