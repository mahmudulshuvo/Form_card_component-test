export const data = [
    {
        as2_id: "ArmadaSCS",

        edi_enabled: "true",

        email: "admin@armada.com",

        encryption_algo: [{ label: "4DES" }],

        entity_name: "Armada",

        fusion_partner_id: "ARMADA",

        gs_id: "ARMADA",

        isa_id: "ARMADA",

        mdn_type: "synchronous",

        ship_method: "M",

        signing_algo: "SHA1",

        cert: "some-cert-here",

        url: "http://edi.armada.net:8080/invoke/wm.EDIINT/receive"
    },

    {
        as2_id: "ArmadaTEST",

        edi_enabled: "false",

        email: "admin@armadaTEST.com",

        encryption_algo: [{ label: "3DES" }],

        entity_name: "Armada",

        fusion_partner_id: "ARMADATEST",

        gs_id: "ARMADATEST",

        isa_id: "ARMADATEST",

        mdn_type: "synchronous",

        ship_method: "M",

        signing_algo: "SHA1",

        cert: "some-cert-here-again",

        url: "http://edi-test.armada.net:8080/invoke/wm.EDIINT/receive"
    }
];

export const options = [
    { label: "3DES" },
    { label: "4DES" },
    { label: "5DES" }
];
