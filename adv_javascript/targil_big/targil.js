class Computer {
  constructor(memory, hdd, cpu, price, warranty) {
    this.setMemory = memory;
    this.setHDD = hdd;
    this.setCPU = cpu;
    this.setPrice = price;
    this.setWarranty = warranty;
  }

  set setMemory(memory) {
    if (memory < 4 || memory > 16) {
      this.memory = 4;
      return;
    }
    this.memory = memory;
  }

  set setHDD(hdd) {
    if (hdd < 200 || hdd > 3000) {
      this.hdd = 200;
      return;
    }
    this.hdd = hdd;
  }

  set setCPU(cpu) {
    this.cpu = cpu;
  }

  set setPrice(price) {
    if (price < 800 || price > 20000) {
      this.price = 20000;
      return;
    }
    this.price = price;
  }

  set setWarranty(warranty) {
    if (warranty < 0 || warranty > 5) {
      this.warranty = 0;
      return;
    }
    this.warranty = warranty;
  }

  additional = () => {
    console.log("we have an air pods max in large discount, only 2500$");
  };

  //memory, hdd, cpu, price, warranty
  print = () => {
    return `memory:${this.memory} hdd:${this.hdd} cpu:${this.cpu} price:${this.price} warranty:${this.warranty}`;
  };
}

class Desktop extends Computer {
  constructor(memory, hdd, cpu, price, warranty, wirelessMouse, screenSize) {
    super(memory, hdd, cpu, price, warranty);
    this.setWirelessMouse = wirelessMouse;
    this.setScreenSize = screenSize;
  }

  set setWirelessMouse(isWireless) {
    if (isWireless instanceof Boolean) {
      this.isWirelessMouse = isWireless;
      return;
    }
    this.isWirelessMouse = false;
  }

  set setScreenSize(screenSize) {
    if (screenSize < 11 || screenSize > 18) {
      this.screenSize = 11;
      return;
    }
    this.screenSize = screenSize;
  }

  offerComputerTable = () => {
    console.log("we have a computer table, only for 9,000$ made of gold");
  };

  print = () => {
    return `${super.print()} wireless mouse:${this.isWireless} screen size:${
      this.screenSize
    }`;
  };
}

class NoteBook extends Computer {
  constructor(
    memory,
    hdd,
    cpu,
    price,
    warranty,
    chargeHours,
    batteryLevel,
    isTouchScreen
  ) {
    super(memory, hdd, cpu, price, warranty);
    this.setChargeHours = chargeHours;
    this.setBatteryLevel = batteryLevel;
    this.setIsTouchScreen = isTouchScreen;
  }

  set setChargeHours(chargeHours) {
    if (chargeHours < 1 || chargeHours > 9) {
      this.chargeHours = 9;
      return;
    }
    this.chargeHours = chargeHours;
  }

  set setBatteryLevel(batteryLevel) {
    if (batteryLevel < 0 || batteryLevel > 100) {
      this.batteryLevel = 0;
      return;
    }
    this.batteryLevel = batteryLevel;
  }

  set setIsTouchScreen(isTouchScreen) {
    if (isTouchScreen instanceof Boolean) {
      this.isTouchScreen = isTouchScreen;
      return;
    }
    this.isTouchScreen = false;
  }

  offerMoreProducts = () => {
    return `you can buy ${super.additional()} and computer suitcase`;
  };

  checkBatteryStatus = () => {
    if (this.batteryLevel === 100) {
      return true;
    }
    return false;
  };

  //chargeHours,  batteryLevel,  isTouchScreen
  print = () => {
    return `${super.print()} charge hours:${this.chargeHours} batteryLevel:${
      this.batteryLevel
    } touchScreen:${this.isTouchScreen}`;
  };
}

const executeFunction = (object) => {
  if (object instanceof Desktop) {
    console.log(object.offerComputerTable());
    console.log(object.print());
  } else if (object instanceof NoteBook) {
    console.log(object.offerMoreProducts());
    console.log(object.checkBatteryStatus());
    console.log(object.print());
  } else {
    console.log("Where The Food");
  }
};
