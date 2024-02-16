class Home {
  private name: String;
  private address: String;
  private devices: Device[];

  constructor(name: String, address: String) {
    this.name = name;
    this.address = address;
    this.devices = [];
  }

  public addDevice(
    name: String,
    location: String,
    nodeId: number,
    totalEndPoints: number
  ) {
    let newDevice = new Device(name, location, nodeId);
    newDevice.createEndpoints(totalEndPoints);
    this.devices.push(newDevice);
  }

  public showHomeDetail(): void {
    for (
      let devicesCounter = 0;
      devicesCounter < this.devices.length;
      devicesCounter++
    ) {
      console.log(`name: ${this.devices[devicesCounter].getName} 
location ${this.devices[devicesCounter].getLocation} 
nodeId: ${this.devices[devicesCounter].getNodeId} `);
      console.log("================================");
      let myEndpoints = this.devices[devicesCounter].getEndPoints;
      for (let epCounter = 0; epCounter < myEndpoints.length; epCounter++) {
        console.log(`epId:${myEndpoints[epCounter].getEpId} 
        name:${myEndpoints[epCounter].getName}`);
      }
      console.log("\n-------------------------------------------\n");
    }
  }
}

class Device {
  private name: String;
  private location: String;
  private nodeId: number;
  private endPoints: EndPoint[];

  constructor(name: String, location: String, nodeId: number) {
    this.name = name;
    this.location = location;
    this.nodeId = nodeId;
    this.endPoints = [];
  }

  public createEndpoints(totalEndPoints: number): void {
    for (let counter = 1; counter <= totalEndPoints; counter++) {
      let singleEndPoint = new EndPoint(
        `nodeId-${this.nodeId}-epId-${counter}`,
        counter
      );
      this.endPoints.push(singleEndPoint);
    }
  }

  public get getName(): String {
    return this.name;
  }

  public get getLocation(): String {
    return this.location;
  }

  public get getNodeId(): number {
    return this.nodeId;
  }

  public get getEndPoints(): EndPoint[] {
    return this.endPoints;
  }
}

class EndPoint {
  private name!: String;
  private epId: number;

  constructor(name: String, epId: number) {
    this.setName = name;
    this.epId = epId;
  }

  public set setName(name: String) {
    this.name = name;
  }

  public get getName(): String {
    return this.name;
  }

  public get getEpId(): number {
    return this.epId;
  }
}

let myHome = new Home("zeev", "qiryat-yam");
myHome.addDevice("entrance", "floor-a", 10, 13);
myHome.addDevice("living-room", "floor-a", 11, 13);
myHome.addDevice("master-bedroom", "floor-b", 12, 13);
myHome.addDevice("theater", "basement", 13, 3);
myHome.addDevice("play-room", "basement", 14, 3);

//console.log(myHome);
myHome.showHomeDetail();
