# mongoose chase
## Investigating possibly redundant network traffic between mongoose and mongodb when connection is made with useUnifiedTopology option
Without the useUnifiedTopology connection parameter set to true, mongoose opens one connection to mongodb to save a record. However, with the useUnifiedTopology connection parameter set to true, mongoose opens two connections to mongodb to save a record. The first connection sends system settings and receives configuration parameters from mongodb. The second connection repeats this process before sending the record to be inserted. The network traffic associated with this process appears to be redundant.

### Contents of this repo
1. `default.js` this file makes a connection to mongodb using default configuration and saves one record
2. `unified.js` this file makes a connection to mongodb using useUnifiedTopology and saves one record
3. `default.pcap` captured network traffic from running `default.js` using `sudo tcpdump -i lo0 -w default.pcap`
4. `unified.pcap` captured network traffic from running `unified.js` using `sudo tcpdump -i lo0 -w unified.pcap`
5. `default.log` text log of `default.js`'s payload contents generated using `tcpdump -r default.pcap -X > default.log`
6. `unified.log` text log of `unified.js`'s payload contents generated using `tcpdump -r unified.pcap -X > unified.log`
