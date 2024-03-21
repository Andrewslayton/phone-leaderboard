import {
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DynamoDBClient,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { client } from "./client";

export async function getAllItems() {
  const command = new ScanCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
  });
  const response = await client.send(command);
  return response.Items;
}

export async function putPhoneCount(username: string) {
  const command = new UpdateItemCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Key: {
      username: { S: username },
    },
    UpdateExpression: "SET #phone_usage_count = #phone_usage_count + :val",
    ExpressionAttributeNames: {
      "#phone_usage_count": "phone_usage_count"
    },
    ExpressionAttributeValues: {
      ":val": { N: "1" }
    }
  });
  return client.send(command);
}

export async function putUser( username: string) {
  const command = new PutItemCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: {
      username: { S: username },
      phone_usage_count: { N: "0" },
    },
  });
  return client.send(command);
}

export async function getUser(username: string) {
  const command = new GetItemCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Key: {
      username: { S: username },
    },
  });
  const response = await client.send(command);
  if (!response.Item) {
    throw new Error("User not found");
  }
  return response.Item;
}

