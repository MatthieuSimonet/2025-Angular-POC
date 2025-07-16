export class daoTest {
    public async Get() : Promise<string> {
        const reponse = await fetch("https://10.128.207.13:8081/Test");
        const text = await reponse.text(); 
        return text;
    }
}