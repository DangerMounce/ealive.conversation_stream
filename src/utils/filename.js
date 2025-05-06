function generateFilename({
    vertical,
    topic,
    agentSentiment,
    customerSentiment,
    nps,
    repeat,
    vulnerable,
    resolution
}) {
    return `Vertical<${vertical}>_Topic<${topic}>_AgentSentiment<${agentSentiment}>_CustomerSentiment<${customerSentiment}>_NPS<${nps}>_Repeat<${repeat ? "True" : "False"}>_Vulnerable<${vulnerable ? "True" : "False"}>_Resolution<${resolution ? "True" : "False"}>.json`;
}
console.clear()
// Example usage:
const config = {
    vertical: 1,
    topic: "CustomerRefundRequest",
    agentSentiment: "Low",
customerSentiment: "High",
nps: "Promotor",
repeat: true,
vulnerable: true,
resolution: true,
    topic_details: "Topic: Customer Refund Request. For this topic, the customer should say one of the following phrases in the conversation: I want a refund,get my money back,refund request for defective item"
}
const filename = generateFilename(config);

console.log(filename);


function generatePrompt() {
    return `Using the previous conversation as a template, please create a conversation relating to the topic "${config.topic}" that uses the same style of opening and closing of the conversation, has ${config.agentSentiment} agent sentiment and ${config.customerSentiment} customer sentiment.  It should also have the following criteria: Repeat conversation - ${config.repeat}, Customer resolution - ${config.resolution}, Vulnerability indicated - ${config.vulnerable} and should also be rated as a ${config.nps} in NPS. If any of these mean that the critial rules cannot be followed, then met the rules as best as possible. The topic details are as below.  Vitally important that you use one of these phrases in the conversations without any deviation:  ${config.topic_details}`
}

const prompt = generatePrompt()
console.log("_______________________")
console.log(prompt)