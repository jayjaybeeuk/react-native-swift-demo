//
//  NimbleComms.swift
//  nimbleswiftreactdemo
//
//  Created by Kieran Hall on 07/03/2023.
//

import Foundation

@objc(NimbleComms)
class NimbleComms: NSObject {
  private var name = "Ernie Wise"
  private var fruits = ["apple", "pear", "raspberry", "strawberry", "lemon", "lime"]
  
  @objc
  func getData(_ callback: RCTResponseSenderBlock){
    callback([
      fruits.randomElement() ?? "",
      name
    ])
  }
  
  @objc
  func setName(_ name: NSString){
    self.name = name as String
  }
}
