import {
  PutItemCommand,
  GetItemCommand,
  DynamoDBClient,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { client } from "./client";

export async function getAllItems () {
  const command = new ScanCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
  });
  const response = await client.send(command);
  return response.Items;
}

export function getUsertime (userId : string) {
    const command = new GetItemCommand({
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Key: {
            user_id: { S: userId },
        },
    });
    return client.send(command);
}