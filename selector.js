// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - 488 imágenes
const photos = [
    'imagenes/DJI_20260124_175845_579.webp',
    'imagenes/DJI_20260124_175850_273.webp',
    'imagenes/DJI_20260124_175931_148.webp',
    'imagenes/DJI_20260124_175933_622.webp',
    'imagenes/DJI_20260124_175945_956.webp',
    'imagenes/DJI_20260124_180035_815.webp',
    'imagenes/DJI_20260124_180145_568.webp',
    'imagenes/DJI_20260124_180247_862.webp',
    'imagenes/DJI_20260124_180309_462.webp',
    'imagenes/DJI_20260124_180311_443.webp',
    'imagenes/DJI_20260124_180323_998.webp',
    'imagenes/DJI_20260124_180326_474.webp',
    'imagenes/DJI_20260124_180331_950.webp',
    'imagenes/DJI_20260124_180347_984.webp',
    'imagenes/DJI_20260124_180353_322.webp',
    'imagenes/DJI_20260124_180400_552.webp',
    'imagenes/DJI_20260124_180405_174.webp',
    'imagenes/DJI_20260124_180408_411.webp',
    'imagenes/DJI_20260124_180411_878.webp',
    'imagenes/DJI_20260124_180415_553.webp',
    'imagenes/DJI_20260124_180419_514.webp',
    'imagenes/DJI_20260124_180422_288.webp',
    'imagenes/DJI_20260124_180425_918.webp',
    'imagenes/DJI_20260124_180428_317.webp',
    'imagenes/DJI_20260124_180430_597.webp',
    'imagenes/DJI_20260124_180444_411.webp',
    'imagenes/DJI_20260124_180448_658.webp',
    'imagenes/DJI_20260124_180452_542.webp',
    'imagenes/DJI_20260124_180505_818.webp',
    'imagenes/DJI_20260124_180513_528.webp',
    'imagenes/DJI_20260124_180531_393.webp',
    'imagenes/DJI_20260124_180533_444.webp',
    'imagenes/DJI_20260124_180535_651.webp',
    'imagenes/DJI_20260124_180538_532.webp',
    'imagenes/DJI_20260124_180544_082.webp',
    'imagenes/DJI_20260124_180550_442.webp',
    'imagenes/DJI_20260124_180556_350.webp',
    'imagenes/DJI_20260124_180601_947.webp',
    'imagenes/DJI_20260124_180606_672.webp',
    'imagenes/DJI_20260124_180611_353.webp',
    'imagenes/DJI_20260124_180617_305.webp',
    'imagenes/DJI_20260124_180620_006.webp',
    'imagenes/DJI_20260124_180624_609.webp',
    'imagenes/DJI_20260124_180629_216.webp',
    'imagenes/DJI_20260124_180633_926.webp',
    'imagenes/DJI_20260124_180646_586.webp',
    'imagenes/DJI_20260124_180649_961.webp',
    'imagenes/DJI_20260124_180652_645.webp',
    'imagenes/DJI_20260124_180658_015.webp',
    'imagenes/DJI_20260124_180706_729.webp',
    'imagenes/DJI_20260124_180750_605.webp',
    'imagenes/DJI_20260124_180813_061.webp',
    'imagenes/DJI_20260124_180815_201.webp',
    'imagenes/DJI_20260124_180839_473.webp',
    'imagenes/DJI_20260124_180949_075.webp',
    'imagenes/DJI_20260124_181031_256.webp',
    'imagenes/DJI_20260124_181042_728.webp',
    'imagenes/DJI_20260124_181044_739.webp',
    'imagenes/DJI_20260124_181047_109.webp',
    'imagenes/DJI_20260124_181102_800.webp',
    'imagenes/DJI_20260124_181110_915.webp',
    'imagenes/DJI_20260124_181209_637.webp',
    'imagenes/DJI_20260124_181218_653.webp',
    'imagenes/DJI_20260124_181234_312.webp',
    'imagenes/DJI_20260124_181321_146.webp',
    'imagenes/DJI_20260124_181332_170.webp',
    'imagenes/DJI_20260124_181353_624.webp',
    'imagenes/DJI_20260124_181530_038.webp',
    'imagenes/DJI_20260124_181626_438.webp',
    'imagenes/DJI_20260124_181824_161.webp',
    'imagenes/DJI_20260124_181827_639.webp',
    'imagenes/DJI_20260124_181842_429.webp',
    'imagenes/DJI_20260124_181852_120.webp',
    'imagenes/DJI_20260124_181858_330.webp',
    'imagenes/DJI_20260124_181902_873.webp',
    'imagenes/DJI_20260124_182102_650.webp',
    'imagenes/DJI_20260124_182127_103.webp',
    'imagenes/DJI_20260124_182141_219.webp',
    'imagenes/DJI_20260124_182159_565.webp',
    'imagenes/DJI_20260124_182206_750.webp',
    'imagenes/DJI_20260124_182211_382.webp',
    'imagenes/DJI_20260124_182302_970.webp',
    'imagenes/DJI_20260124_182326_131.webp',
    'imagenes/DJI_20260124_182332_041.webp',
    'imagenes/DJI_20260124_182419_786.webp',
    'imagenes/DJI_20260124_182708_225.webp',
    'imagenes/DJI_20260124_183100_115.webp',
    'imagenes/DJI_20260124_183102_273.webp',
    'imagenes/DJI_20260124_183105_307.webp',
    'imagenes/DJI_20260124_183109_700.webp',
    'imagenes/DJI_20260124_183114_337.webp',
    'imagenes/DJI_20260124_183121_146.webp',
    'imagenes/DJI_20260124_183133_027.webp',
    'imagenes/DJI_20260124_183143_301.webp',
    'imagenes/DJI_20260124_183148_702.webp',
    'imagenes/DJI_20260124_183151_100.webp',
    'imagenes/DJI_20260124_183154_835.webp',
    'imagenes/DJI_20260124_183203_612.webp',
    'imagenes/DJI_20260124_183216_120.webp',
    'imagenes/DJI_20260124_183250_547.webp',
    'imagenes/DJI_20260124_183254_522.webp',
    'imagenes/DJI_20260124_183258_483.webp',
    'imagenes/DJI_20260124_183302_442.webp',
    'imagenes/DJI_20260124_183305_532.webp',
    'imagenes/DJI_20260124_183308_983.webp',
    'imagenes/DJI_20260124_183316_287.webp',
    'imagenes/DJI_20260124_183318_266.webp',
    'imagenes/DJI_20260124_183321_148.webp',
    'imagenes/DJI_20260124_183327_625.webp',
    'imagenes/DJI_20260124_183330_237.webp',
    'imagenes/DJI_20260124_183335_666.webp',
    'imagenes/DJI_20260124_183343_571.webp',
    'imagenes/DJI_20260124_183349_616.webp',
    'imagenes/DJI_20260124_183408_666.webp',
    'imagenes/DJI_20260124_183418_972.webp',
    'imagenes/DJI_20260124_183420_876.webp',
    'imagenes/DJI_20260124_183423_605.webp',
    'imagenes/DJI_20260124_183426_037.webp',
    'imagenes/DJI_20260124_183429_607.webp',
    'imagenes/DJI_20260124_183431_631.webp',
    'imagenes/DJI_20260124_183437_677.webp',
    'imagenes/DJI_20260124_183444_547.webp',
    'imagenes/DJI_20260124_183447_423.webp',
    'imagenes/DJI_20260124_183451_957.webp',
    'imagenes/DJI_20260124_183454_251.webp',
    'imagenes/DJI_20260124_183458_092.webp',
    'imagenes/DJI_20260124_183502_112.webp',
    'imagenes/DJI_20260124_183505_892.webp',
    'imagenes/DJI_20260124_183510_242.webp',
    'imagenes/DJI_20260124_183512_296.webp',
    'imagenes/DJI_20260124_183516_002.webp',
    'imagenes/DJI_20260124_183518_370.webp',
    'imagenes/DJI_20260124_183520_411.webp',
    'imagenes/DJI_20260124_183522_359.webp',
    'imagenes/DJI_20260124_183524_971.webp',
    'imagenes/DJI_20260124_183527_971.webp',
    'imagenes/DJI_20260124_183529_829.webp',
    'imagenes/DJI_20260124_183531_722.webp',
    'imagenes/DJI_20260124_183536_282.webp',
    'imagenes/DJI_20260124_183539_177.webp',
    'imagenes/DJI_20260124_183541_801.webp',
    'imagenes/DJI_20260124_183545_746.webp',
    'imagenes/DJI_20260124_183548_522.webp',
    'imagenes/DJI_20260124_183553_081.webp',
    'imagenes/DJI_20260124_183556_050.webp',
    'imagenes/DJI_20260124_183558_300.webp',
    'imagenes/DJI_20260124_183604_691.webp',
    'imagenes/DJI_20260124_183606_848.webp',
    'imagenes/DJI_20260124_183614_679.webp',
    'imagenes/DJI_20260124_183646_737.webp',
    'imagenes/DJI_20260124_183649_750.webp',
    'imagenes/DJI_20260124_183651_669.webp',
    'imagenes/DJI_20260124_183657_595.webp',
    'imagenes/DJI_20260124_183700_761.webp',
    'imagenes/DJI_20260124_183703_505.webp',
    'imagenes/DJI_20260124_183708_516.webp',
    'imagenes/DJI_20260124_183710_689.webp',
    'imagenes/DJI_20260124_183714_140.webp',
    'imagenes/DJI_20260124_183716_885.webp',
    'imagenes/DJI_20260124_183720_560.webp',
    'imagenes/DJI_20260124_183726_395.webp',
    'imagenes/DJI_20260124_183728_267.webp',
    'imagenes/DJI_20260124_183731_840.webp',
    'imagenes/DJI_20260124_183736_835.webp',
    'imagenes/DJI_20260124_183738_889.webp',
    'imagenes/DJI_20260124_183741_800.webp',
    'imagenes/DJI_20260124_183747_408.webp',
    'imagenes/DJI_20260124_183749_886.webp',
    'imagenes/DJI_20260124_183753_065.webp',
    'imagenes/DJI_20260124_183754_879.webp',
    'imagenes/DJI_20260124_183801_046.webp',
    'imagenes/DJI_20260124_183802_963.webp',
    'imagenes/DJI_20260124_183811_965.webp',
    'imagenes/DJI_20260124_183813_794.webp',
    'imagenes/DJI_20260124_183815_788.webp',
    'imagenes/DJI_20260124_183818_280.webp',
    'imagenes/DJI_20260124_183821_430.webp',
    'imagenes/DJI_20260124_183824_607.webp',
    'imagenes/DJI_20260124_183827_370.webp',
    'imagenes/DJI_20260124_183829_857.webp',
    'imagenes/DJI_20260124_183845_069.webp',
    'imagenes/DJI_20260124_183848_038.webp',
    'imagenes/DJI_20260124_183850_767.webp',
    'imagenes/DJI_20260124_183852_581.webp',
    'imagenes/DJI_20260124_183854_816.webp',
    'imagenes/DJI_20260124_183909_205.webp',
    'imagenes/DJI_20260124_183916_555.webp',
    'imagenes/DJI_20260124_183919_046.webp',
    'imagenes/DJI_20260124_183921_098.webp',
    'imagenes/DJI_20260124_183925_752.webp',
    'imagenes/DJI_20260124_183928_376.webp',
    'imagenes/DJI_20260124_183932_273.webp',
    'imagenes/DJI_20260124_183934_313.webp',
    'imagenes/DJI_20260124_183937_088.webp',
    'imagenes/DJI_20260124_183941_139.webp',
    'imagenes/DJI_20260124_183950_365.webp',
    'imagenes/DJI_20260124_184001_645.webp',
    'imagenes/DJI_20260124_184004_403.webp',
    'imagenes/DJI_20260124_184006_636.webp',
    'imagenes/DJI_20260124_184018_266.webp',
    'imagenes/DJI_20260124_184028_403.webp',
    'imagenes/DJI_20260124_184031_192.webp',
    'imagenes/DJI_20260124_184035_560.webp',
    'imagenes/DJI_20260124_184039_714.webp',
    'imagenes/DJI_20260124_184043_120.webp',
    'imagenes/DJI_20260124_184047_379.webp',
    'imagenes/DJI_20260124_184050_485.webp',
    'imagenes/DJI_20260124_184053_680.webp',
    'imagenes/DJI_20260124_184056_769.webp',
    'imagenes/DJI_20260124_184100_160.webp',
    'imagenes/DJI_20260124_184102_679.webp',
    'imagenes/DJI_20260124_184105_589.webp',
    'imagenes/DJI_20260124_184107_868.webp',
    'imagenes/DJI_20260124_184148_070.webp',
    'imagenes/DJI_20260124_184155_029.webp',
    'imagenes/DJI_20260124_184200_369.webp',
    'imagenes/DJI_20260124_184203_772.webp',
    'imagenes/DJI_20260124_184205_993.webp',
    'imagenes/DJI_20260124_184209_038.webp',
    'imagenes/DJI_20260124_184212_204.webp',
    'imagenes/DJI_20260124_184218_095.webp',
    'imagenes/DJI_20260124_184241_633.webp',
    'imagenes/DJI_20260124_184245_428.webp',
    'imagenes/DJI_20260124_184256_512.webp',
    'imagenes/DJI_20260124_184258_988.webp',
    'imagenes/DJI_20260124_184308_243.webp',
    'imagenes/DJI_20260124_184312_577.webp',
    'imagenes/DJI_20260124_184318_953.webp',
    'imagenes/DJI_20260124_184322_283.webp',
    'imagenes/DJI_20260124_184339_668.webp',
    'imagenes/DJI_20260124_184344_949.webp',
    'imagenes/DJI_20260124_184400_969.webp',
    'imagenes/DJI_20260124_184418_383.webp',
    'imagenes/DJI_20260124_184422_208.webp',
    'imagenes/DJI_20260124_184427_621.webp',
    'imagenes/DJI_20260124_184431_012.webp',
    'imagenes/DJI_20260124_184436_068.webp',
    'imagenes/DJI_20260124_184442_052.webp',
    'imagenes/DJI_20260124_184444_153.webp',
    'imagenes/DJI_20260124_184448_294.webp',
    'imagenes/DJI_20260124_184451_323.webp',
    'imagenes/DJI_20260124_184458_418.webp',
    'imagenes/DJI_20260124_184512_548.webp',
    'imagenes/DJI_20260124_184532_034.webp',
    'imagenes/DJI_20260124_184538_349.webp',
    'imagenes/DJI_20260124_184554_234.webp',
    'imagenes/DJI_20260124_184606_609.webp',
    'imagenes/DJI_20260124_184629_514.webp',
    'imagenes/DJI_20260124_184636_563.webp',
    'imagenes/DJI_20260124_184720_056.webp',
    'imagenes/DJI_20260124_184725_633.webp',
    'imagenes/DJI_20260124_184741_955.webp',
    'imagenes/DJI_20260124_184747_382.webp',
    'imagenes/DJI_20260124_184757_810.webp',
    'imagenes/DJI_20260124_184822_859.webp',
    'imagenes/DJI_20260124_184839_329.webp',
    'imagenes/DJI_20260124_184845_537.webp',
    'imagenes/DJI_20260124_184847_396.webp',
    'imagenes/DJI_20260124_184857_029.webp',
    'imagenes/DJI_20260124_184900_074.webp',
    'imagenes/DJI_20260124_184907_243.webp',
    'imagenes/DJI_20260124_184932_324.webp',
    'imagenes/DJI_20260124_184946_724.webp',
    'imagenes/DJI_20260124_184952_439.webp',
    'imagenes/DJI_20260124_184954_944.webp',
    'imagenes/DJI_20260124_184958_048.webp',
    'imagenes/DJI_20260124_185000_599.webp',
    'imagenes/DJI_20260124_185004_590.webp',
    'imagenes/DJI_20260124_185008_939.webp',
    'imagenes/DJI_20260124_185056_084.webp',
    'imagenes/DJI_20260124_185058_816.webp',
    'imagenes/DJI_20260124_185101_739.webp',
    'imagenes/DJI_20260124_185107_094.webp',
    'imagenes/DJI_20260124_185116_469.webp',
    'imagenes/DJI_20260124_185126_862.webp',
    'imagenes/DJI_20260124_185131_231.webp',
    'imagenes/DJI_20260124_185141_248.webp',
    'imagenes/DJI_20260124_185143_723.webp',
    'imagenes/DJI_20260124_185243_694.webp',
    'imagenes/DJI_20260124_185246_663.webp',
    'imagenes/DJI_20260124_185326_457.webp',
    'imagenes/DJI_20260124_185328_948.webp',
    'imagenes/DJI_20260124_185332_278.webp',
    'imagenes/DJI_20260124_185358_140.webp',
    'imagenes/DJI_20260124_185420_758.webp',
    'imagenes/DJI_20260124_185422_617.webp',
    'imagenes/DJI_20260124_185424_790.webp',
    'imagenes/DJI_20260124_185426_923.webp',
    'imagenes/DJI_20260124_185430_267.webp',
    'imagenes/DJI_20260124_185432_846.webp',
    'imagenes/DJI_20260124_185434_734.webp',
    'imagenes/DJI_20260124_185437_585.webp',
    'imagenes/DJI_20260124_185440_379.webp',
    'imagenes/DJI_20260124_185442_642.webp',
    'imagenes/DJI_20260124_185445_072.webp',
    'imagenes/DJI_20260124_185447_759.webp',
    'imagenes/DJI_20260124_185454_748.webp',
    'imagenes/DJI_20260124_185457_928.webp',
    'imagenes/DJI_20260124_185501_765.webp',
    'imagenes/DJI_20260124_185506_806.webp',
    'imagenes/DJI_20260124_185509_326.webp',
    'imagenes/DJI_20260124_185513_753.webp',
    'imagenes/DJI_20260124_185518_342.webp',
    'imagenes/DJI_20260124_185523_290.webp',
    'imagenes/DJI_20260124_185525_241.webp',
    'imagenes/DJI_20260124_185528_690.webp',
    'imagenes/DJI_20260124_185534_497.webp',
    'imagenes/DJI_20260124_185540_255.webp',
    'imagenes/DJI_20260124_185655_985.webp',
    'imagenes/DJI_20260124_185702_977.webp',
    'imagenes/DJI_20260124_185812_278.webp',
    'imagenes/DJI_20260124_185823_093.webp',
    'imagenes/DJI_20260124_185902_978.webp',
    'imagenes/DJI_20260124_185905_753.webp',
    'imagenes/DJI_20260124_185907_701.webp',
    'imagenes/DJI_20260124_185911_183.webp',
    'imagenes/DJI_20260124_185913_160.webp',
    'imagenes/DJI_20260124_185915_997.webp',
    'imagenes/DJI_20260124_185917_916.webp',
    'imagenes/DJI_20260124_185921_878.webp',
    'imagenes/DJI_20260124_185924_833.webp',
    'imagenes/DJI_20260124_185927_067.webp',
    'imagenes/DJI_20260124_185929_302.webp',
    'imagenes/DJI_20260124_185931_312.webp',
    'imagenes/DJI_20260124_185934_237.webp',
    'imagenes/DJI_20260124_185936_906.webp',
    'imagenes/DJI_20260124_185939_773.webp',
    'imagenes/DJI_20260124_185942_428.webp',
    'imagenes/DJI_20260124_185944_888.webp',
    'imagenes/DJI_20260124_185948_411.webp',
    'imagenes/DJI_20260124_185954_322.webp',
    'imagenes/DJI_20260124_185957_067.webp',
    'imagenes/DJI_20260124_185958_971.webp',
    'imagenes/DJI_20260124_190003_247.webp',
    'imagenes/DJI_20260124_190005_256.webp',
    'imagenes/DJI_20260124_190008_078.webp',
    'imagenes/DJI_20260124_190020_257.webp',
    'imagenes/DJI_20260124_190027_728.webp',
    'imagenes/DJI_20260124_190033_427.webp',
    'imagenes/DJI_20260124_190039_052.webp',
    'imagenes/DJI_20260124_190041_483.webp',
    'imagenes/DJI_20260124_190048_110.webp',
    'imagenes/DJI_20260124_190050_692.webp',
    'imagenes/DJI_20260124_190057_860.webp',
    'imagenes/DJI_20260124_190102_245.webp',
    'imagenes/DJI_20260124_190105_060.webp',
    'imagenes/DJI_20260124_190107_098.webp',
    'imagenes/DJI_20260124_190109_860.webp',
    'imagenes/DJI_20260124_190111_840.webp',
    'imagenes/DJI_20260124_190113_836.webp',
    'imagenes/DJI_20260124_190116_041.webp',
    'imagenes/DJI_20260124_190120_871.webp',
    'imagenes/DJI_20260124_190126_046.webp',
    'imagenes/DJI_20260124_190143_206.webp',
    'imagenes/DJI_20260124_190147_104.webp',
    'imagenes/DJI_20260124_190149_130.webp',
    'imagenes/DJI_20260124_190236_576.webp',
    'imagenes/DJI_20260124_190323_302.webp',
    'imagenes/DJI_20260124_190328_911.webp',
    'imagenes/DJI_20260124_190332_527.webp',
    'imagenes/DJI_20260124_190335_857.webp',
    'imagenes/DJI_20260124_190337_775.webp',
    'imagenes/DJI_20260124_190340_055.webp',
    'imagenes/DJI_20260124_190344_286.webp',
    'imagenes/DJI_20260124_190347_284.webp',
    'imagenes/DJI_20260124_190350_088.webp',
    'imagenes/DJI_20260124_190353_122.webp',
    'imagenes/DJI_20260124_190431_026.webp',
    'imagenes/DJI_20260124_190435_317.webp',
    'imagenes/DJI_20260124_190509_982.webp',
    'imagenes/DJI_20260124_190514_482.webp',
    'imagenes/DJI_20260124_190518_008.webp',
    'imagenes/DJI_20260124_190529_736.webp',
    'imagenes/DJI_20260124_190532_195.webp',
    'imagenes/DJI_20260124_190548_263.webp',
    'imagenes/DJI_20260124_190552_026.webp',
    'imagenes/DJI_20260124_190608_813.webp',
    'imagenes/DJI_20260124_190611_633.webp',
    'imagenes/DJI_20260124_190627_925.webp',
    'imagenes/DJI_20260124_190630_818.webp',
    'imagenes/DJI_20260124_190714_455.webp',
    'imagenes/DJI_20260124_190718_057.webp',
    'imagenes/DJI_20260124_190836_272.webp',
    'imagenes/DJI_20260124_190839_512.webp',
    'imagenes/DJI_20260124_190846_875.webp',
    'imagenes/DJI_20260124_190858_652.webp',
    'imagenes/DJI_20260124_190908_318.webp',
    'imagenes/DJI_20260124_191037_532.webp',
    'imagenes/DJI_20260124_191046_563.webp',
    'imagenes/DJI_20260124_191049_428.webp',
    'imagenes/DJI_20260124_191051_572.webp',
    'imagenes/DJI_20260124_191055_158.webp',
    'imagenes/DJI_20260124_191118_737.webp',
    'imagenes/DJI_20260124_191121_588.webp',
    'imagenes/DJI_20260124_191123_508.webp',
    'imagenes/DJI_20260124_191147_269.webp',
    'imagenes/DJI_20260124_191149_231.webp',
    'imagenes/DJI_20260124_191339_770.webp',
    'imagenes/DJI_20260124_191342_396.webp',
    'imagenes/DJI_20260124_191417_542.webp',
    'imagenes/DJI_20260124_191420_440.webp',
    'imagenes/DJI_20260124_191457_202.webp',
    'imagenes/DJI_20260124_191459_031.webp',
    'imagenes/DJI_20260124_191520_092.webp',
    'imagenes/DJI_20260124_191525_253.webp',
    'imagenes/DJI_20260124_191552_895.webp',
    'imagenes/DJI_20260124_191557_379.webp',
    'imagenes/DJI_20260124_191600_411.webp',
    'imagenes/DJI_20260124_191618_770.webp',
    'imagenes/DJI_20260124_191622_039.webp',
    'imagenes/DJI_20260124_191640_730.webp',
    'imagenes/DJI_20260124_191643_850.webp',
    'imagenes/DJI_20260124_191647_541.webp',
    'imagenes/DJI_20260124_191721_736.webp',
    'imagenes/DJI_20260124_191725_636.webp',
    'imagenes/DJI_20260124_191743_203.webp',
    'imagenes/DJI_20260124_191746_983.webp',
    'imagenes/DJI_20260124_191829_581.webp',
    'imagenes/DJI_20260124_191834_172.webp',
    'imagenes/DJI_20260124_191856_145.webp',
    'imagenes/DJI_20260124_191934_724.webp',
    'imagenes/DJI_20260124_191940_647.webp',
    'imagenes/DJI_20260124_191959_819.webp',
    'imagenes/DJI_20260124_192002_217.webp',
    'imagenes/DJI_20260124_192008_983.webp',
    'imagenes/DJI_20260124_192016_214.webp',
    'imagenes/DJI_20260124_192027_296.webp',
    'imagenes/DJI_20260124_192032_683.webp',
    'imagenes/DJI_20260124_192056_412.webp',
    'imagenes/DJI_20260124_192109_327.webp',
    'imagenes/DJI_20260124_192114_442.webp',
    'imagenes/DJI_20260124_192118_959.webp',
    'imagenes/DJI_20260124_192143_121.webp',
    'imagenes/DJI_20260124_192147_006.webp',
    'imagenes/DJI_20260124_192214_813.webp',
    'imagenes/DJI_20260124_192218_325.webp',
    'imagenes/DJI_20260124_192223_275.webp',
    'imagenes/DJI_20260124_192227_369.webp',
    'imagenes/DJI_20260124_192249_912.webp',
    'imagenes/DJI_20260124_192252_794.webp',
    'imagenes/DJI_20260124_192255_554.webp',
    'imagenes/DJI_20260124_192309_098.webp',
    'imagenes/DJI_20260124_192314_860.webp',
    'imagenes/DJI_20260124_192323_439.webp',
    'imagenes/DJI_20260124_192330_683.webp',
    'imagenes/DJI_20260124_192353_213.webp',
    'imagenes/DJI_20260124_192359_168.webp',
    'imagenes/DJI_20260124_192409_997.webp',
    'imagenes/DJI_20260124_192429_768.webp',
    'imagenes/DJI_20260124_192539_214.webp',
    'imagenes/DJI_20260124_192542_350.webp',
    'imagenes/DJI_20260124_192545_218.webp',
    'imagenes/DJI_20260124_192548_103.webp',
    'imagenes/DJI_20260124_192559_006.webp',
    'imagenes/DJI_20260124_192607_409.webp',
    'imagenes/DJI_20260124_192610_771.webp',
    'imagenes/DJI_20260124_192614_072.webp',
    'imagenes/DJI_20260124_192616_802.webp',
    'imagenes/DJI_20260124_192619_334.webp',
    'imagenes/DJI_20260124_192623_299.webp',
    'imagenes/DJI_20260124_192626_988.webp',
    'imagenes/DJI_20260124_192631_863.webp',
    'imagenes/DJI_20260124_203013_791.webp',
    'imagenes/DJI_20260124_203022_310.webp',
    'imagenes/DJI_20260124_203032_820.webp',
    'imagenes/DJI_20260124_203037_280.webp',
    'imagenes/DJI_20260124_203041_898.webp',
    'imagenes/DJI_20260124_203052_550.webp',
    'imagenes/DJI_20260124_203055_879.webp',
    'imagenes/DJI_20260124_203059_884.webp',
    'imagenes/DJI_20260124_203102_645.webp',
    'imagenes/DJI_20260124_203116_503.webp',
    'imagenes/DJI_20260124_203121_229.webp',
    'imagenes/DJI_20260124_203123_495.webp',
    'imagenes/DJI_20260124_203218_062.webp',
    'imagenes/DJI_20260124_203408_751.webp',
    'imagenes/DJI_20260124_203414_077.webp',
    'imagenes/DSC_8807.webp',
    'imagenes/DSC_8808.webp',
    'imagenes/DSC_8809.webp',
    'imagenes/DSC_8810.webp',
    'imagenes/DSC_8812.webp',
    'imagenes/DSC_8813.webp',
    'imagenes/DSC_8814.webp',
    'imagenes/DSC_8815.webp',
    'imagenes/DSC_8817.webp',
    'imagenes/DSC_8818.webp',
    'imagenes/DSC_8819.webp',
    'imagenes/DSC_8820.webp',
    'imagenes/DSC_8821.webp',
    'imagenes/DSC_8822.webp',
    'imagenes/DSC_8823.webp',
    'imagenes/DSC_8824.webp',
    'imagenes/DSC_8825.webp',
    'imagenes/DSC_8826.webp',
    'imagenes/DSC_8827.webp',
    'imagenes/DSC_8828.webp',
    'imagenes/DSC_8829.webp',
    'imagenes/DSC_8830.webp',
    'imagenes/DSC_8831.webp',
    'imagenes/DSC_8832.webp',
    'imagenes/DSC_8833.webp',
    'imagenes/DSC_8834.webp',
    'imagenes/DSC_8837.webp',
    'imagenes/DSC_8838.webp',
    'imagenes/DSC_8839.webp',
    'imagenes/DSC_8840.webp',
    'imagenes/DSC_8841.webp',
    'imagenes/DSC_8842.webp',
    'imagenes/DSC_8843.webp',
    'imagenes/DSC_8844.webp',
    'imagenes/DSC_8845.webp',
    'imagenes/DSC_8846.webp',
    'imagenes/DSC_8847.webp',
    'imagenes/DSC_8848.webp',
    'imagenes/DSC_8849.webp',
    'imagenes/DSC_8850.webp',
    'imagenes/DSC_8851.webp',
    'imagenes/DSC_8852.webp',
    'imagenes/DSC_8853.webp',
    'imagenes/DSC_8854.webp',
    'imagenes/DSC_8855.webp',
    'imagenes/DSC_8856.webp',
    'imagenes/DSC_8857.webp',
    'imagenes/DSC_8858.webp',
    'imagenes/DSC_8859.webp',
    'imagenes/DSC_8860.webp',
    'imagenes/DSC_8861.webp',
    'imagenes/DSC_8862.webp',
    'imagenes/DSC_8863.webp',
    'imagenes/DSC_8864.webp',
    'imagenes/DSC_8865.webp',
    'imagenes/DSC_8866.webp',
    'imagenes/DSC_8867.webp',
    'imagenes/DSC_8868.webp',
    'imagenes/DSC_8869.webp',
    'imagenes/DSC_8871.webp',
    'imagenes/DSC_8872.webp',
    'imagenes/DSC_8873.webp',
    'imagenes/DSC_8874.webp',
    'imagenes/DSC_8875.webp',
    'imagenes/DSC_8876.webp',
    'imagenes/DSC_8877.webp',
    'imagenes/DSC_8878.webp',
    'imagenes/DSC_8879.webp',
    'imagenes/DSC_8880.webp',
    'imagenes/DSC_8881.webp',
    'imagenes/DSC_8882.webp',
    'imagenes/DSC_8883.webp',
    'imagenes/DSC_8884.webp',
    'imagenes/DSC_8885.webp',
    'imagenes/DSC_8886.webp',
    'imagenes/DSC_8887.webp',
    'imagenes/DSC_8888.webp',
    'imagenes/DSC_8889.webp',
    'imagenes/DSC_8890.webp',
    'imagenes/DSC_8891.webp',
    'imagenes/DSC_8892.webp',
    'imagenes/DSC_8893.webp',
    'imagenes/DSC_8894.webp',
    'imagenes/DSC_8895.webp',
    'imagenes/DSC_8896.webp',
    'imagenes/DSC_8897.webp',
    'imagenes/DSC_8898.webp',
    'imagenes/DSC_8899.webp',
    'imagenes/DSC_8900.webp',
    'imagenes/DSC_8901.webp',
    'imagenes/DSC_8902.webp',
    'imagenes/DSC_8903.webp',
    'imagenes/DSC_8904.webp',
    'imagenes/DSC_8905.webp',
    'imagenes/DSC_8906.webp',
    'imagenes/DSC_8907.webp',
    'imagenes/DSC_8908.webp',
    'imagenes/DSC_8910.webp',
    'imagenes/DSC_8911.webp',
    'imagenes/DSC_8912.webp',
    'imagenes/DSC_8913.webp',
    'imagenes/DSC_8914.webp',
    'imagenes/DSC_8915.webp',
    'imagenes/DSC_8916.webp',
    'imagenes/DSC_8917.webp',
    'imagenes/DSC_8918.webp',
    'imagenes/DSC_8919.webp',
    'imagenes/DSC_8920.webp',
    'imagenes/DSC_8921.webp',
    'imagenes/DSC_8922.webp',
    'imagenes/DSC_8923.webp',
    'imagenes/DSC_8924.webp',
    'imagenes/DSC_8925.webp',
    'imagenes/DSC_8926.webp',
    'imagenes/DSC_8927.webp',
    'imagenes/DSC_8928.webp',
    'imagenes/DSC_8929.webp',
    'imagenes/DSC_8930.webp',
    'imagenes/DSC_8931.webp',
    'imagenes/DSC_8932.webp',
    'imagenes/DSC_8933.webp',
    'imagenes/DSC_8934.webp',
    'imagenes/DSC_8935.webp',
    'imagenes/DSC_8936.webp',
    'imagenes/DSC_8937.webp',
    'imagenes/DSC_8938.webp',
    'imagenes/DSC_8939.webp',
    'imagenes/DSC_8940.webp',
    'imagenes/DSC_8941.webp',
    'imagenes/DSC_8942.webp',
    'imagenes/DSC_8943.webp',
    'imagenes/DSC_8944.webp',
    'imagenes/DSC_8945.webp',
    'imagenes/DSC_8946.webp',
    'imagenes/DSC_8947.webp',
    'imagenes/DSC_8948.webp',
    'imagenes/DSC_8949.webp',
    'imagenes/DSC_8950.webp',
    'imagenes/DSC_8951.webp',
    'imagenes/DSC_8952.webp',
    'imagenes/DSC_8953.webp',
    'imagenes/DSC_8954.webp',
    'imagenes/DSC_8955.webp',
    'imagenes/DSC_8956.webp',
    'imagenes/DSC_8957.webp',
    'imagenes/DSC_8958.webp',
    'imagenes/DSC_8959.webp',
    'imagenes/DSC_8960.webp',
    'imagenes/DSC_8961.webp',
    'imagenes/DSC_8962.webp',
    'imagenes/DSC_8963.webp',
    'imagenes/DSC_8964.webp',
    'imagenes/DSC_8965.webp',
    'imagenes/DSC_8966.webp',
    'imagenes/DSC_8967.webp',
    'imagenes/DSC_8968.webp',
    'imagenes/DSC_8969.webp',
    'imagenes/DSC_8970.webp',
    'imagenes/DSC_8971.webp',
    'imagenes/DSC_8972.webp',
    'imagenes/DSC_8973.webp',
    'imagenes/DSC_8974.webp',
    'imagenes/DSC_8975.webp',
    'imagenes/DSC_8976.webp',
    'imagenes/DSC_8977.webp',
    'imagenes/DSC_8978.webp',
    'imagenes/DSC_8979.webp',
    'imagenes/DSC_8980.webp',
    'imagenes/DSC_8981.webp',
    'imagenes/DSC_8982.webp',
    'imagenes/DSC_8983.webp',
    'imagenes/DSC_8984.webp',
    'imagenes/DSC_8985.webp',
    'imagenes/DSC_8986.webp',
    'imagenes/DSC_8987.webp',
    'imagenes/DSC_8988.webp',
    'imagenes/DSC_8989.webp',
    'imagenes/DSC_8990.webp',
    'imagenes/DSC_8991.webp',
    'imagenes/DSC_8992.webp',
    'imagenes/DSC_8993.webp',
    'imagenes/DSC_8994.webp',
    'imagenes/DSC_8995.webp',
    'imagenes/DSC_8996.webp',
    'imagenes/DSC_8997.webp',
    'imagenes/DSC_8998.webp',
    'imagenes/DSC_8999.webp',
    'imagenes/DSC_9000.webp',
    'imagenes/DSC_9001.webp',
    'imagenes/DSC_9002.webp',
    'imagenes/DSC_9003.webp',
    'imagenes/DSC_9004.webp',
    'imagenes/DSC_9005.webp',
    'imagenes/DSC_9006.webp',
    'imagenes/DSC_9007.webp',
    'imagenes/DSC_9008.webp',
    'imagenes/DSC_9009.webp',
    'imagenes/DSC_9010.webp',
    'imagenes/DSC_9011.webp',
    'imagenes/DSC_9012.webp',
    'imagenes/DSC_9013.webp',
    'imagenes/DSC_9014.webp',
    'imagenes/DSC_9015.webp',
    'imagenes/DSC_9022.webp',
    'imagenes/DSC_9023.webp',
    'imagenes/DSC_9024.webp',
    'imagenes/DSC_9025.webp',
    'imagenes/DSC_9026.webp',
    'imagenes/DSC_9027.webp',
    'imagenes/DSC_9028.webp',
    'imagenes/DSC_9030.webp',
    'imagenes/DSC_9031.webp',
    'imagenes/DSC_9032.webp',
    'imagenes/DSC_9033.webp',
    'imagenes/DSC_9034.webp',
    'imagenes/DSC_9036.webp',
    'imagenes/DSC_9037.webp',
    'imagenes/DSC_9038.webp',
    'imagenes/DSC_9039.webp',
    'imagenes/DSC_9040.webp',
    'imagenes/DSC_9041.webp',
    'imagenes/DSC_9042.webp',
    'imagenes/DSC_9043.webp',
    'imagenes/DSC_9044.webp',
    'imagenes/DSC_9045.webp',
    'imagenes/DSC_9046.webp',
    'imagenes/DSC_9047.webp',
    'imagenes/DSC_9048.webp',
    'imagenes/DSC_9049.webp',
    'imagenes/DSC_9050.webp',
    'imagenes/DSC_9051.webp',
    'imagenes/DSC_9052.webp',
    'imagenes/DSC_9053.webp',
    'imagenes/DSC_9054.webp',
    'imagenes/DSC_9055.webp',
    'imagenes/DSC_9056.webp',
    'imagenes/DSC_9057.webp',
    'imagenes/DSC_9058.webp',
    'imagenes/DSC_9059.webp',
    'imagenes/DSC_9060.webp',
    'imagenes/DSC_9061.webp',
    'imagenes/DSC_9062.webp',
    'imagenes/DSC_9063.webp',
    'imagenes/DSC_9064.webp',
    'imagenes/DSC_9065.webp',
    'imagenes/DSC_9066.webp',
    'imagenes/DSC_9067.webp',
    'imagenes/DSC_9068.webp',
    'imagenes/DSC_9069.webp',
    'imagenes/DSC_9070.webp',
];

const STORAGE_KEY = 'boda_bernardo_fatima_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================
function isYouTubeVideo(item) {
    return item.startsWith('youtube:');
}

function getYouTubeId(item) {
    return item.replace('youtube:', '');
}

function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="loading-message"><p>No hay fotos disponibles aún. Por favor, sube las fotos al directorio imagenes/ y actualiza el array photos[] en selector.js</p></div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        // Determine if it's a YouTube video or image
        const isVideo = isYouTubeVideo(photo);
        const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

        let mediaHTML;
        if (isVideo) {
            const videoId = getYouTubeId(photo);
            const thumbnail = getYouTubeThumbnail(videoId);
            mediaHTML = `
                <div class="photo-image-container video-container">
                    <img src="${thumbnail}" alt="${displayNumber}" loading="lazy">
                    <div class="video-overlay">
                        <div class="play-button">▶</div>
                    </div>
                </div>
            `;
        } else {
            mediaHTML = `
                <div class="photo-image-container">
                    <img src="${photo}" alt="${displayNumber}" loading="lazy">
                </div>
            `;
        }

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const isVideo = isYouTubeVideo(photo);
    const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    // Clear previous content and add new media
    if (isVideo) {
        const videoId = getYouTubeId(photo);
        const embedUrl = getYouTubeEmbedUrl(videoId);
        modalImageContainer.innerHTML = `
            <iframe id="modalImage"
                src="${embedUrl}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="youtube-iframe">
            </iframe>
            <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
        `;
    } else {
        modalImageContainer.innerHTML = `
            <img id="modalImage" src="${photo}" alt="${displayNumber}">
            <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
        `;
    }

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda Bernardo & Fátima',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-bernardo-fatima-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💒 SELECCIÓN DE FOTOS - BODA BERNARDO & FÁTIMA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Navigation button event listeners
    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

    console.log('Selector de fotos inicializado - Boda Bernardo & Fátima');
    console.log(`Total de fotos: ${photos.length}`);
    console.log('Selecciones cargadas:', photoSelections);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
