export DEBIAN_FRONTEND=noninteractive

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo -E apt-get install -y nodejs

# Install Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo -E apt-get update && sudo apt-get install --no-install-recommends yarn