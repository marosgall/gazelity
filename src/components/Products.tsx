import Image from "next/image"

export default function Products() {
    return (
        <section id="products" className="flex items-center justify-center bg-gray-100 shadow-lg scroll-mt-12">
            <div className="max-w-5xl mx-auto px-6 pb-20">

        
                <div  className="text-center mb-16">
                    <Image src="/pricing_heading.png" alt="Pricing Heading" width={600} height={300} className="mx-auto mt-20" />
                    <p className="text-gray-600 text-lg md:text-xl">
                        Možnosť nakonfigurovať si vlastný balíček.
                    </p>
                </div>

                <div className="border-b py-8 flex justify-between gap-8">

                    <div className="flex gap-6">

                        <div className="text-2xl font-bold text-gray-700">
                        01
                        </div>

                        <div>
                            <h4 className="text-xl tracking-widest font-semibold mb-2">
                                ŠTART BALÍČEK
                            </h4>

                            <p className="text-gray-600 max-w-xl">
                                Individuálny mesačný bežecký plán prispôsobený podľa
                                osobných cieľov. Core cvičenia, silové cvičenia,
                                kompenzačné cvičenia + konzultácie cez whatsapp/messenger.
                            </p>
                        </div>

                    </div>

                    <div className="text-3xl font-light">
                        69€
                    </div>

                </div>

                <div className="border-b py-8 flex justify-between gap-8">

                    <div className="flex gap-6">

                        <div className="text-2xl font-bold text-gray-700">
                        02
                        </div>

                        <div>
                            <h4 className="text-xl tracking-widest font-semibold mb-2">
                                ENDURANCE BALÍČEK
                            </h4>

                            <p className="text-gray-600 max-w-xl">
                                Mesačný personalizovaný bežecký plán. Individuálne a špecializované core cvičenia, silové cvičenia, kompenzačné cvičenia + konzultácie ohľadom stravy, hydratácie, predpretekovej prípravy a doplnkoch.
                            </p>
                        </div>

                    </div>

                    <div className="text-3xl font-light">
                        99€
                    </div>

                </div>

                <div className="border-b py-8 flex justify-between gap-8">

                    <div className="flex gap-6">

                        <div className="text-2xl font-bold text-gray-700">
                        03
                        </div>

                        <div>
                            <h4 className="text-xl tracking-widest font-semibold mb-2">
                                ELITE BALÍČEK
                            </h4>

                            <p className="text-gray-600 max-w-xl">
                                Individuálny mesačný tréningový plán, silový plán,
                                doplnky, výživa, predpretekové stravovanie, hydratácia, návod a usmernenie pri zostavení jedálnička, heat tréning, online hovory/spoločné tréningy, optimalizácia celého lifestylu a manažmentu tréningov.
                            </p>
                        </div>

                    </div>

                    <div className="text-3xl font-light">
                        169€
                    </div>

                </div>

                <div className="border-b py-8 flex justify-between gap-8">

                    <div className="flex gap-6">

                        <div className="text-2xl font-bold text-gray-700">
                        04
                        </div>

                        <div>
                            <h4 className="text-xl tracking-widest font-semibold mb-2">
                                MESAČNÝ BEŽECKÝ PLÁN
                            </h4>

                            <p className="text-gray-600 max-w-xl">
                                Bežecký plán v PDF forme na mesiac.
                                Nie je individualizovaný. Prispôsobený na výkonnosť športovca, ale bez možnosti konzultácií a úprav.
                            </p>
                        </div>

                    </div>

                    <div className="text-3xl font-light">
                        35€
                    </div>

                </div>

                <div className="border-b py-8 flex justify-between gap-8">

                    <div className="flex gap-6">

                        <div className="text-2xl font-bold text-gray-700">
                        05
                        </div>

                        <div>
                            <h4 className="text-xl tracking-widest font-semibold mb-2">
                                LAKTÁTOVÁ KRIVKA
                            </h4>

                            <p className="text-gray-600 max-w-xl">
                                Presné stanovenie zón na základe laktátu v krvi
                                a srdcového tepu → odber + interpretácia.
                            </p>
                        </div>

                    </div>

                    <div className="text-3xl font-light">
                        59€
                    </div>

                </div>


            </div>
        </section>
    )
}