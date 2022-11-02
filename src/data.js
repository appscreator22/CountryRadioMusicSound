import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Tamar Valley Country",
            artist: "TamarValleyCountry",
            cover: "https://img.freepik.com/vector-gratis/dia-mundial-radio-diseno-plano_23-2148802732.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://s14.myradiostream.com/:6262/;",
            active: true,
        },
        {
            name:"24-7 Hot Country",
            artist: "24-7HotCountry",
            cover: "https://img.freepik.com/vector-gratis/marco-neon-vivo-aire_23-2148758076.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://ssl.shoutcaststreaming.us:8050/stream/1/",
            active: false,
        },
        {
            name:"Irish Country Radio",
            artist: "IrishCountryRadio",
            cover: "https://img.freepik.com/vector-gratis/texto-plano-dia-mundial-radio_23-2148825802.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://stream13.shoutcastsolutions.com/proxy/icr?mp=/stream/1/",
            active: false,
        },
        {
            name:"Irish Country Music Radio",
            artist: "IrishCountryMusicRadio",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://stream.galaxywebsolutions.com/proxy/irishcountry?mp=/stream",
            active: false,
        },
        {
            name:"P10 Radio Country",
            artist: "P10RadioCountry",
            cover: "https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://p10.p4groupaudio.com/P10_MH",
            active: false,
        },
        {
            name:"1.FM - Country One Radio",
            artist: "1.FM-CountryOneRadio",
            cover: "https://img.freepik.com/vector-gratis/fondo-retro-dia-mundial-radio_23-2147594195.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://strm112.1.fm/country_mobile_mp3",
            active: false,
        },
        {
            name:"Todays Country 94One",
            artist: "TodaysCountry94One",
            cover: "https://img.freepik.com/vector-gratis/fondo-onda-ecualizador-colorido_52683-33072.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://audio-edge-fp8o9.yyz.d.radiomast.io/70cbd986-0f98-4506-a84d-6d8eeff50bc6",
            active: false,
        },
        {
            name:"Golden Country Song",
            artist: "GoldenCountrySong",
            cover: "https://cdn-icons-png.flaticon.com/512/1251/1251671.png",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://goldencountry.stream.laut.fm/goldencountry?t302=2022-11-02_15-52-14&uuid=05999cb5-5d8e-44c2-ae7d-dd3c8cdb1cc7",
            active: false,
        },
        {
            name:"Total Country",
            artist: "TotalCountry",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41311.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://totalcountry.radioca.st/stream",
            active: false,
        },
    ];
}

export default chillHop;


