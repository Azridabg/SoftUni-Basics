function christmasPreperation (input) {
   let wrappingPaper = Number(input[0]) ;
   let isLether = Number(input[1]);
   let isGlue =Number(input[2]);
   let isDiscount = Number(input[3]);

   let wrappingPaperPrice = wrappingPaper * 5.80;
   let isLetherPrice = isLether * 7.20;
   let isGluePrice = isGlue * 1.20;

   let finalPrice = ((wrappingPaperPrice +isLetherPrice + isGluePrice) * ((100 - isDiscount)/ 100)).toFixed(3) ;
   console.log(finalPrice);
}
christmasPreperation(['2', '3', '2.5', '25'])