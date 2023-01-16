## what is computer network?

a group of systems connected through a communication medium and guided by a protocal is called computer networks.
 
## Computer Networks (vs) Distributed Systems?

1.Although both looks in a same way but distributed systems differ from the networks, in general distributed systems are built on networks and provide
some model to serve its users lets say WWW is a distributed system which provides a model to view the documents across the networks.

2.distributed systems are built using middleware a software which is present on the os in simple terms distributed systems depends on the operating systems
and the networks are independent of the operating systems.

## what is networking?

sending data/resources to other hosts through the internet is called networking

## what is host?

any device that can be assigned an IP address is called a host

## what is a switch?

switches are devices that are used as intermidatery devices to connect two or more systems and can also connects these systems to the router
its job is to maintain IP address and send the data to the correct IP address oin the local area devices which are connected through this switch

## Router

a router is used to connect two or more different networks

> The router that is present in our most of the houses is not a router it self its the combination of router and modem and collectively this devices are called as VDSL or ADSL.
> router has some services present in it such as (DHCP which assigns random IP's to the local systems and NAT which converts this private IP to public IP that is the router's IP and some services for encryption and so on) 
> from router the packets are sent to the modem where digital signals are converted to analog signals and vice versa and from here the packets are sent/recieve to the internet.

## Internet

networks of networks is called an Internet

> Networks are divided into two classes based on the transmission technologies and the scale(distance)

> the networks based on the transmission technology are broadcast networks and point to point networks

> the networks that are under the category of scaling are PAN,LAN,MAN and WAN.

### LAN

1. the home wifi setup is the classical example of the LAN which includes hosts,switch,router. More on this later

### WAN 

1. after the router everything is based on WAN like the ISP and things like that.
2. there are two types of WAN public and private based on cost and privacy.

### MAN

1. It is a metropolitan area network (MAN).
2. A computer network that connects computers within a metropolitan area.
3. A network that interconnects users with computer resources in a geographic area, that covered by even a LAN but smaller than the area covered by WAN.


## About VPN?

virtual private networks are used to be safe in the internet world as there are some advantages that vpn services provides to its users
lets see the visualization of how vpn works under the hood
<img width="1440" alt="Screenshot 2023-01-16 at 7 56 48 AM" src="https://user-images.githubusercontent.com/111889155/212585856-7b34550b-2091-4538-a4d2-f82e2d9d1267.png">

### without VPN

1. you request a site from the internet then the data is sent from your device with an asssigned IP to the router as packets where it is encrypted and assigns the packet with its own IP and keeps track of which device sent that and transfers to its nearest ISP.
2. ISP can see all the meta data and the IP from where its getting the request and to what the request is asking for and with DNS lookup mechanism it finds sents the request to the server where server can see the even the local IP address assigned to you if its thte https server then the information inside the response cant see by the ISP

## with VPN

1. if you use the vpn service the data packets are encrypted before reaching the router then the modem sends the packets to ISP now the differnece is ISP is redirected to the VPN servers instead of actual website servers 
2. VPN servers doesnt keep track of the local ip address they assigned to you and the actual servers cant see the IP adddress of where the requet is coing from originally but sees the random ip address of its local area VPN servers.

## Advantages

1. secure in the router level
2. privacy at the servers level
3. can send/recieve information bypassing the firewall


CREDITS : ANIMAGRAFFS youtube video of how a VPN works (the best video about VPN out there)


## NIC

> MAC address are permanent and its the address of NIC hardware but IP address are dynamic and changes based on situations

1. NIC stands for Network interface cards these are the hardware presnet in our systems and helps us to connect to the router in order to send the data packets
2. these are three types wired NIC(ethernet cable holder) wireless NIC(mostly present in our systems and with this we can connect to the router and send the info to router) and bluetooth NIC.
3. these have some speeds at ehich they can send/recieve information the conslict story of router speed and the NIC speed (will discuss later)




