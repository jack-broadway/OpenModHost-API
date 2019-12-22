Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/bionic64"
  config.vm.box_check_update = false

  # Network
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.hostname = "cloudcrack.localdev"

  # Filesystem
  config.vm.synced_folder '.', '/home/vagrant/modpackhost'

  # VB Specifics
  config.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
      vb.gui = false
      vb.name = "CAB432-CloudCrack"
      vb.memory = "2048"
	  vb.cpus = "2"
  end

  # Provisioning
  config.vm.provision :shell, path: "./deploy/scripts/genericSetup.sh", name: "Configuring Virtual Machine"
  config.vm.provision :shell, path: "./deploy/scripts/installNodeJS.sh", name: "Installing NodeJS"
  config.vm.provision :shell, path: "./deploy/scripts/installDocker.sh", name: "Installing Docker"
end