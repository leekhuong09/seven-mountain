export class Tools {
    static massiveRequire(req: any) {
        const files: any = [];
        req.keys().forEach((key: any) => {
            if (key) {
                files.push({
                    key: key,
                    data: req(key),
                });
            }
        });

        return files;
    }
}
