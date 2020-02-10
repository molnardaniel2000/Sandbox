/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template!!!</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        var nationalDexNumber: number = 6;
        var species: string = "Charizard";
        var fainted: boolean = false;
        var attacks: string[] = ["Air Slash", "Dragon Claw", "Flamethrower", "Inferno"];
        res.write(`National dex number: ${nationalDexNumber} \nSpecies: ${species} \nFainted: ${fainted}`);
        res.write("\nAttacks:\n");
        for (let index = 0; index < attacks.length; index++) {
            res.write(`${attacks[index]}\n`);
        }
        var boxName: [number, string] = [1, "Reserve"];
        res.write(`Box number: ${boxName[0]} Box name: ${boxName[1]}\n`);
        enum Types {
            Fire = "Fire",
            Grass = "Grass",
            Water = "Water",
            Electric = "Electric",
            Flying = "Flying"
        }
        var types: [Types, Types] = [Types.Fire, Types.Flying];
        res.write(`Main type: ${types[0]} Sub type: ${types[1]}\n`);
        var height: string | number;
        height = "5'07";
        res.write(`Height in inches: ${height}\n`);
        height = 1.7;
        res.write(`Height in meters: ${height}\n`);
        var something: any;
        something = "Something";
        res.write(`${something} \n`);
        something = 151;
        res.write(`${something} \n`);
        something = true;
        res.write(`${something} \n`);
        function writeHelloWord(): void {
            res.write("Hello World!\n");
        }
        writeHelloWord();
        writeHelloWord();
        writeHelloWord();
        res.write("</pre></form></body></html>");
        res.end();
    }
}
