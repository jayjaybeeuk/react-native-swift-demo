//
//  NimbleComms.m
//  nimbleswiftreactdemo
//
//  Created by Kieran Hall on 07/03/2023.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NimbleComms, NSObject)
RCT_EXTERN_METHOD(getData: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(setName: (NSString)name)
@end
