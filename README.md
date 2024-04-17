# FlowChart:
Angular FlowChart is an essential package utilized for crafting intricate flowchart designs within Angular projects.

## Installation
You can install the npm i flow-chart-lib package using npm:
**` npm i flow-chart-lib `**
## Usage
# Importing the Component
Import the FlowChartComponent into your Angular project:
**` import { FlowChartComponent } from 'flow-chart-lib';'; `**

## Using the Component
Add the <lib-flow-chart> component in your Angular template:
**' <lib-flow-chart [flowDataList]="flowDataList"></lib-flow-chart> `**

## Component Inputs
**flowDataList: An array of objects representing the input data fields.**

## flowDataList:
The flowDataList array represents the input data fields that will be mapped. Each object in the array should have the following structure:

## 1. label:

Purpose: Defines the text displayed on a node in the flow chart.
Data Type: String
Required: Yes, every node object in the flowDataList array must have a label property.
Example: "Send Email", "Root", "End"
## 2. condition (Optional):

Purpose: Introduces conditional branching in the flow chart. It allows you to create different paths based on a specific condition.
Data Type: Array of objects
Required: No, not all nodes require a condition property. It's only used when you want to define branching based on a condition.
Structure:
Each object within the condition array represents a potential outcome of the condition.
Each condition object has two required properties:
label (required): String defining the text displayed for the specific branch.
flowDataList (required): Another array that defines a sub-flow chart specific to that branch. This sub-flow chart follows the same structure as the main flowDataList allowing for nested flows.

## 3. flowDataList:

Purpose: This is the core array that defines the entire flow chart structure. It's an array of objects, where each object represents a node in the flow chart.
Data Type: Array of objects
Required: Yes, your plugin expects a flowDataList array to be provided when using the <lib-flow-chart> component.
Structure:
Each object within the array represents a node in the flow chart.
Each node object can have two properties:
label (required): String defining the text displayed on the node.
condition (optional): Array of objects defining conditional branching for that node (explained above).

## Example:
**flowDataList: any[] = [
    {
      "label": "Root",
    },
    {
      "label": "Send Email",
    },
    {
      "label": "Validate is email opened?",
      "condition": [
        {
          "label": "Success Flow",
          "flowDataList": [
            {
              "label": "Send Thanks Email"
            },
          ]
        },
        {
          "label": "Failed Flow",
          "flowDataList": [
            {
              "label": "Send Remainder Email"
            }, {
              "label": "Send Remainder Email"
            }
          ]
        }
      ]
    },
    {
      "label": "End"
    }
  ];**
## Demo Example: 
**[https://flow-chart-host.web.app/]**
