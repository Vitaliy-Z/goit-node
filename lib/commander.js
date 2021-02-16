import commander from "commander";
const program = new commander.Command();

export default program
  .version("0.0.1")
  .addOption(
    new commander.Option("-a, --action <size>", "action").choices([
      "list",
      "get",
      "add",
      "remove",
    ])
  )
  .option("-i, --id [type]", "id")
  .option("-n, --name [type]", "name")
  .option("-e, --email [type]", "email")
  .option("-p, --phone [type]", "phone");
