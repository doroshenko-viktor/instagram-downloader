#! /usr/bin/env node
import configure from "./cli/cli-configurator";

configure();

// "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fsrc%2F20%2F201310.jpg&f=1&nofb=1"

// import { program } from "commander";
// // import chalk from "chalk";
// import { getStreamed } from "./infrastructure/image-downloader";
// import { save } from "./infrastructure/file-manager";

// // const INSTAGRAM_TOKEN = "IGQVJWdXhWSHUxRXkwNTFpV2hWWU5DZAnRIUWtUSGFuUllraFFYM1hTUlJrVjVVZAGdaWGxFaGJMR3RxZAjNRTC15VmlWNDBiUF9vVUsyLTEzNTVIdlUzOC1YaXpWVUhkdXBBajUweEx3SFhsNHhKWjVqMQZDZD";

// const action = async () => {
//     const imageStream = await getStreamed("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fsrc%2F20%2F201310.jpg&f=1&nofb=1");
//     save("test.jpg", imageStream);
//     // const fileWriteStream = fs.createWriteStream("file.jpg");
//     // imageStream.pipe(fileWriteStream);
// };

// program
//     .command('test')
//     .description('test option')
//     .action(action);

// program.parse();