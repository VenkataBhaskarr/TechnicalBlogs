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

## what is a hub?

a device that lets you to communicate with other devices using concept of bradcasting and is less efficient.

## what is a switch?

switches are successor of hubs which are intelligent devices that uses uni and multi casting based on MAC address
switches are devices that are used as intermidatery devices to connect two or more systems and can also connects these systems to the router
its job is to maintain MAC address and send the data to the correct MAC address on the locally connected devices through the switch.

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

## What is IP address?

1. IP stands for internet protocol address assigned to every host 
2. there are two types of IP address IP4 and IP6. IP6 is introduced because of all the available IP4 address are being assigned and we running out of address

## IP4

1. it's a 32 bit address divided into 4 groups x.x.x.x each group is of 8 bits (generally represented in decimal format). Further divided into 5 classes based on a technique implemented by IANA

2. 0 and 127 are reserved in IP4 
3. inorder to buy IP address IANA created 5 organisations for different locations.

## IP6 

1. it's a 128 bit address divided into 8 groups each group consists of 16 bits (generally represneted in hexa decimal format0. 
2. came into existence because IP4 address are running out of stock 😉

## INTERNET and the History if the INTERNET

> Internet its not a super power, nothing just nothing but a network of networks like we are sendin information from one computer to another just thats it that is what internet is called at the end of the day we are sending them from our computer to another through the cables constructed in the submarines which are provided by the ISP's

1. The internet came into the picture long back when there was a cold war going between Russia and USA where russia sent its first satellite sputnik and then america seeing that formed two organizations DARPA(defence advanced research project agency) and NASA(National Aeronautics and Space Administration)
2. the primary goal of DARPA is to create a network among its defence beanches present in various locations in order to ease the communications between them for which they constructed the cables underground and established a network and NASA is for developing rocket science.
3. after successfully creating the network DARPA decided to launch it publicly named as ARPA(advanced research project agency). the investors invested to construct cables along different locations are now called as tier1 ISP's 
4. later the tier2 ISP's retrieve the information from tier1 ISP that is deriving the internet from tier1 isp and provides to the users or else it will further gives its power to the tier3 ISP's

<img width="819" alt="Screenshot 2023-01-16 at 10 08 33 AM" src="https://user-images.githubusercontent.com/111889155/212604489-659538ae-cf49-44f7-a64a-59e91f4a76a4.png">


## PROTOCOLS

1. protocols are nothing but a set of rules to be followed inorder to successfully complete a particular task
2. network protocols are the set of pre defined rules in order to send/recieve data packets from your device to targeted devices
3. the old and standard protocol is OSI(open systems inter connection model this is not used now it s outdated but every tother protocol or the ones we are currently using also based on OSI model) the present model is TCP/IP which stands for transmission control protocol/internet protocol.


## OSI model (please do not throw spicy pizzas away)

` 1. PHYSICAL LAYER `

> the ethernet cables , NIC's comes under the physical layer the rj45 port used to connect the ethernet cables
> how the bits are represented in the cables (digital/electrical)
> data is represented as bits in this layer

` 2. DATA LINK LAYER `

> data link layer revolves around MAC addresses that is the physical addresses of the devices
> the data is represented as frames in this layer

` 3. NETWORK LAYER `

> network layer revolves around the IP address that is logical addresses of the devices
> routers are involved in this layer
> the data is represented in the form of packets

` 4. TRANSPORT LAYER `

> transport layer is further divided into two protocols TCP(for reliability) and UDP (for fast connections)
> keeps track of port addresses
> the data is represented as segments

` 5. SESSION LAYER `

> initilizes a session and maintains the session
> authentication and authorization occurs at this level

` 6. PRESENTATION LAYER `

> the application layer is responsible for data formatting and data encryption

` 7. APPLICATION LAYER `

> the protocols present and running under the hood of user applications comes under this layer but not the applications themselves
> SMTP,HTTP AND HTTPS ARE some of the protocols


## SOME JARGOONS 😏

> the IP4 address are in the format X.X.X.X these are further divide into classes by IANA 
<img width="1424" alt="Screenshot 2023-01-18 at 11 23 28 AM" src="https://user-images.githubusercontent.com/111889155/213121090-242adac6-7aae-4fa0-8052-0b86c257684c.png">

> the IP address consists of two parts, one is the Host address and other is the network address

> if two or more systems wants to communicate with each other their network parts must be the same

> in order to implement this topic they have introdiced the concept of subnet mask. subnet mask is a value which gives the devices the information about the network address to compare in order to communicate.

> the default subnet mask for A class IP's are 255.0.0.0
> the default subnet mask for B class IP's are 255.255.0.0
> the default subnet mask for C class IP's are 255.255.255.0
> you know subnet mask for A class IP's can be also 255.255.0.0 or 255.255.255.0 and same for B and C classes hence we cant judge classes by subnets we can only judge classes by actual IP's

> generally class D IP's are used for routing protocols and class E protocols are not under consideration dont know why. but we will give them a shot as well but not now.

> but in general whole world doent contain the same network address in order to communicate they have different network address assigned to them but in order t o facilitate communication betoween them routers came into the picture routers enable the communication between different networks.

> router store the network address in their routing and sends the information to that network address that is another router


## DEEP DIVE INTO SUBNETTING AND SUB MASK

> subnetting is a strategy used to reduce the wastage of IP' addresses

<img width="498" alt="Screenshot 2023-01-18 at 2 43 51 PM" src="https://user-images.githubusercontent.com/111889155/213137536-59ff077f-17da-4eab-a799-186772f9550d.png">

refer above values for getting the submasks

> dividind a network address into subnets , why? to reduce the cost of buying more IP's and to decrease tjhe traffic flow through unneccessary routes

> it si based on simple statregy refer the pages attached below 

> X.X.X.X/V here V is the slash value, with the help of the slash value he computers can derive the subnet mask udsed to identofy the network address
