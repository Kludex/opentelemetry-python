window.BENCHMARK_DATA = {
  "lastUpdate": 1707357241421,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python SDK Benchmarks - Python 3.11 - SDK": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdb6389a78d7c357565268a68d1705706f453f",
          "message": "Rename benchmarks branch to gh-pages (#3581)\n\nFixes #3580",
          "timestamp": "2023-12-14T20:33:34-06:00",
          "tree_id": "bbcc7db43bfb09d8be31cc43593ce6278e8ea718",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/48fdb6389a78d7c357565268a68d1705706f453f"
        },
        "date": 1702628043216,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 919125.7789501001,
            "unit": "iter/sec",
            "range": "stddev: 8.963932919490788e-8",
            "extra": "mean: 1.0879903740076586 usec\nrounds: 30806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 866171.2563752028,
            "unit": "iter/sec",
            "range": "stddev: 3.360539114209923e-7",
            "extra": "mean: 1.15450610100461 usec\nrounds: 97154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767111.585345143,
            "unit": "iter/sec",
            "range": "stddev: 2.552029932275722e-7",
            "extra": "mean: 1.3035913146195994 usec\nrounds: 112035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 678826.2398825133,
            "unit": "iter/sec",
            "range": "stddev: 2.1136217014928756e-7",
            "extra": "mean: 1.473131033021165 usec\nrounds: 78755"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 562677.4826108214,
            "unit": "iter/sec",
            "range": "stddev: 2.518112170502371e-7",
            "extra": "mean: 1.77721702201411 usec\nrounds: 90642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 919666.2959146053,
            "unit": "iter/sec",
            "range": "stddev: 1.7469742198275074e-7",
            "extra": "mean: 1.0873509276595845 usec\nrounds: 53090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870348.3592292825,
            "unit": "iter/sec",
            "range": "stddev: 1.711390158127123e-7",
            "extra": "mean: 1.148965226849543 usec\nrounds: 137466"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 769770.9552563041,
            "unit": "iter/sec",
            "range": "stddev: 2.476861853944945e-7",
            "extra": "mean: 1.299087726253634 usec\nrounds: 134673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 673820.8875513654,
            "unit": "iter/sec",
            "range": "stddev: 3.095565818301746e-7",
            "extra": "mean: 1.4840739111456678 usec\nrounds: 124956"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 561086.0291710411,
            "unit": "iter/sec",
            "range": "stddev: 3.556652894969962e-7",
            "extra": "mean: 1.7822578856176807 usec\nrounds: 84222"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922689.0368297382,
            "unit": "iter/sec",
            "range": "stddev: 3.541918042448067e-7",
            "extra": "mean: 1.0837887523145326 usec\nrounds: 32110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 879613.799238098,
            "unit": "iter/sec",
            "range": "stddev: 2.743127584021781e-7",
            "extra": "mean: 1.1368625649872455 usec\nrounds: 117272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779263.9971320797,
            "unit": "iter/sec",
            "range": "stddev: 2.4385131154992634e-7",
            "extra": "mean: 1.2832621597819143 usec\nrounds: 117645"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684313.1006268384,
            "unit": "iter/sec",
            "range": "stddev: 2.2714819341457625e-7",
            "extra": "mean: 1.4613193859418867 usec\nrounds: 112800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 559370.3746652022,
            "unit": "iter/sec",
            "range": "stddev: 2.954817015959684e-7",
            "extra": "mean: 1.7877242794606811 usec\nrounds: 115556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 747351.1299360996,
            "unit": "iter/sec",
            "range": "stddev: 1.1132106793108436e-7",
            "extra": "mean: 1.338059126351361 usec\nrounds: 3834"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 745559.9194552418,
            "unit": "iter/sec",
            "range": "stddev: 2.473517316198177e-7",
            "extra": "mean: 1.3412738183815862 usec\nrounds: 198805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 742225.8500105082,
            "unit": "iter/sec",
            "range": "stddev: 1.9785063942307618e-7",
            "extra": "mean: 1.3472988039770406 usec\nrounds: 159404"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 796165.5373182931,
            "unit": "iter/sec",
            "range": "stddev: 1.0563073921687926e-7",
            "extra": "mean: 1.256020203246021 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 794434.4275364181,
            "unit": "iter/sec",
            "range": "stddev: 1.1516120695892894e-7",
            "extra": "mean: 1.2587571300265161 usec\nrounds: 172656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 737451.5779110143,
            "unit": "iter/sec",
            "range": "stddev: 2.545714008506206e-7",
            "extra": "mean: 1.356021235770773 usec\nrounds: 19623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 792052.4711555769,
            "unit": "iter/sec",
            "range": "stddev: 1.082930509297308e-7",
            "extra": "mean: 1.2625426173357364 usec\nrounds: 185833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 746007.1395119943,
            "unit": "iter/sec",
            "range": "stddev: 2.3346138161175505e-7",
            "extra": "mean: 1.3404697449064051 usec\nrounds: 180461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 748729.2809081713,
            "unit": "iter/sec",
            "range": "stddev: 2.571548644077778e-7",
            "extra": "mean: 1.3355962234935568 usec\nrounds: 190482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 794174.2094031352,
            "unit": "iter/sec",
            "range": "stddev: 1.1371529190980426e-7",
            "extra": "mean: 1.2591695728215022 usec\nrounds: 182145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 725520.3123605299,
            "unit": "iter/sec",
            "range": "stddev: 1.6657516286637725e-7",
            "extra": "mean: 1.3783211620174103 usec\nrounds: 29187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 770948.2963728677,
            "unit": "iter/sec",
            "range": "stddev: 1.1249219846066901e-7",
            "extra": "mean: 1.297103845620734 usec\nrounds: 173689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 771659.964464329,
            "unit": "iter/sec",
            "range": "stddev: 1.0792565280216183e-7",
            "extra": "mean: 1.2959075837168514 usec\nrounds: 176516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 773619.7946507485,
            "unit": "iter/sec",
            "range": "stddev: 1.0863703105812781e-7",
            "extra": "mean: 1.2926246289386263 usec\nrounds: 173942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 723549.583472139,
            "unit": "iter/sec",
            "range": "stddev: 2.3658190943851145e-7",
            "extra": "mean: 1.3820752894379988 usec\nrounds: 198547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 720717.3906254729,
            "unit": "iter/sec",
            "range": "stddev: 2.499081775138413e-7",
            "extra": "mean: 1.3875064109833015 usec\nrounds: 29166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 720605.6629638305,
            "unit": "iter/sec",
            "range": "stddev: 2.2854935390789634e-7",
            "extra": "mean: 1.3877215395269424 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 770908.6440664794,
            "unit": "iter/sec",
            "range": "stddev: 1.1127458966978588e-7",
            "extra": "mean: 1.297170563200696 usec\nrounds: 179586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 776138.9971991688,
            "unit": "iter/sec",
            "range": "stddev: 1.0976382706871773e-7",
            "extra": "mean: 1.2884290102786644 usec\nrounds: 179166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 726078.7546180703,
            "unit": "iter/sec",
            "range": "stddev: 2.484948283955935e-7",
            "extra": "mean: 1.3772610665712384 usec\nrounds: 194943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 698478.4011960655,
            "unit": "iter/sec",
            "range": "stddev: 3.018679547085174e-7",
            "extra": "mean: 1.431683496995201 usec\nrounds: 26481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 696636.6460634929,
            "unit": "iter/sec",
            "range": "stddev: 2.3764951840852628e-7",
            "extra": "mean: 1.4354685554524476 usec\nrounds: 191160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689228.0590736185,
            "unit": "iter/sec",
            "range": "stddev: 2.185035319096884e-7",
            "extra": "mean: 1.4508985622902317 usec\nrounds: 199952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 682303.9362160373,
            "unit": "iter/sec",
            "range": "stddev: 2.5268452712937975e-7",
            "extra": "mean: 1.4656224988908328 usec\nrounds: 193433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 681694.5013493592,
            "unit": "iter/sec",
            "range": "stddev: 2.4945746354848175e-7",
            "extra": "mean: 1.4669327653671562 usec\nrounds: 169414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66727.45592804764,
            "unit": "iter/sec",
            "range": "stddev: 0.000007420231283133922",
            "extra": "mean: 14.986334876580672 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59365.31338844127,
            "unit": "iter/sec",
            "range": "stddev: 9.421017812330877e-7",
            "extra": "mean: 16.84485338191957 usec\nrounds: 23564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdb6389a78d7c357565268a68d1705706f453f",
          "message": "Rename benchmarks branch to gh-pages (#3581)\n\nFixes #3580",
          "timestamp": "2023-12-14T20:33:34-06:00",
          "tree_id": "bbcc7db43bfb09d8be31cc43593ce6278e8ea718",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/48fdb6389a78d7c357565268a68d1705706f453f"
        },
        "date": 1702628099034,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 914534.7312585397,
            "unit": "iter/sec",
            "range": "stddev: 1.1270452849354733e-7",
            "extra": "mean: 1.0934521848326602 usec\nrounds: 32586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 864052.3903774832,
            "unit": "iter/sec",
            "range": "stddev: 8.546812213871608e-8",
            "extra": "mean: 1.1573372299370928 usec\nrounds: 90819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 761308.7564849785,
            "unit": "iter/sec",
            "range": "stddev: 1.3596579167115952e-7",
            "extra": "mean: 1.3135275162433142 usec\nrounds: 126012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674780.8249785887,
            "unit": "iter/sec",
            "range": "stddev: 1.1661564999311933e-7",
            "extra": "mean: 1.4819626802995338 usec\nrounds: 115494"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 557321.5960060655,
            "unit": "iter/sec",
            "range": "stddev: 1.4991253600321297e-7",
            "extra": "mean: 1.7942961607199532 usec\nrounds: 111628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 910859.0629007356,
            "unit": "iter/sec",
            "range": "stddev: 7.865002129585527e-8",
            "extra": "mean: 1.097864687008092 usec\nrounds: 51146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 858930.9927815739,
            "unit": "iter/sec",
            "range": "stddev: 1.4259343754750532e-7",
            "extra": "mean: 1.1642378822093569 usec\nrounds: 145258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779896.0115615657,
            "unit": "iter/sec",
            "range": "stddev: 1.6928876395082407e-7",
            "extra": "mean: 1.282222226008985 usec\nrounds: 124104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672149.6392529444,
            "unit": "iter/sec",
            "range": "stddev: 1.0159950706515345e-7",
            "extra": "mean: 1.4877639465989188 usec\nrounds: 49617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564166.4704047614,
            "unit": "iter/sec",
            "range": "stddev: 1.6222781776513107e-7",
            "extra": "mean: 1.7725264659605697 usec\nrounds: 118685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 926062.2100203916,
            "unit": "iter/sec",
            "range": "stddev: 7.712626534427721e-8",
            "extra": "mean: 1.0798410616258494 usec\nrounds: 25179"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880042.8530710989,
            "unit": "iter/sec",
            "range": "stddev: 1.7188413823432172e-7",
            "extra": "mean: 1.1363083019313036 usec\nrounds: 48492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 774632.1206254049,
            "unit": "iter/sec",
            "range": "stddev: 3.476839558201053e-7",
            "extra": "mean: 1.290935365800017 usec\nrounds: 126860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 679741.4626742263,
            "unit": "iter/sec",
            "range": "stddev: 1.3977711367002874e-7",
            "extra": "mean: 1.4711475684678974 usec\nrounds: 112611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 560431.0746659256,
            "unit": "iter/sec",
            "range": "stddev: 1.864216601025188e-7",
            "extra": "mean: 1.784340742697222 usec\nrounds: 122770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 752937.0015770134,
            "unit": "iter/sec",
            "range": "stddev: 1.5148459533567995e-7",
            "extra": "mean: 1.328132364202473 usec\nrounds: 3985"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 748368.5073086824,
            "unit": "iter/sec",
            "range": "stddev: 1.78901080051197e-7",
            "extra": "mean: 1.3362400879163747 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 741997.8063398638,
            "unit": "iter/sec",
            "range": "stddev: 2.7695012813972453e-7",
            "extra": "mean: 1.3477128792776527 usec\nrounds: 156022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805447.9002434706,
            "unit": "iter/sec",
            "range": "stddev: 7.40235212877754e-8",
            "extra": "mean: 1.241545231786836 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 803271.7818976644,
            "unit": "iter/sec",
            "range": "stddev: 8.62684285899718e-8",
            "extra": "mean: 1.2449086629653305 usec\nrounds: 187227"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 734621.2431827871,
            "unit": "iter/sec",
            "range": "stddev: 7.63558221705793e-7",
            "extra": "mean: 1.3612456885502586 usec\nrounds: 20213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 797356.9606610265,
            "unit": "iter/sec",
            "range": "stddev: 1.0116884351975274e-7",
            "extra": "mean: 1.2541434380543663 usec\nrounds: 187292"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 796386.5407922904,
            "unit": "iter/sec",
            "range": "stddev: 9.123947390869153e-8",
            "extra": "mean: 1.2556716478472167 usec\nrounds: 189741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 793398.1494794333,
            "unit": "iter/sec",
            "range": "stddev: 9.801316521611751e-8",
            "extra": "mean: 1.2604012256092643 usec\nrounds: 182021"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 801066.9017777751,
            "unit": "iter/sec",
            "range": "stddev: 1.0337396732053723e-7",
            "extra": "mean: 1.2483351862132124 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 732744.2461842541,
            "unit": "iter/sec",
            "range": "stddev: 1.415993881433974e-7",
            "extra": "mean: 1.3647326542753124 usec\nrounds: 29331"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 731715.1335620825,
            "unit": "iter/sec",
            "range": "stddev: 1.5709926475976624e-7",
            "extra": "mean: 1.3666520673583347 usec\nrounds: 196909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 787579.0228127004,
            "unit": "iter/sec",
            "range": "stddev: 9.717123658903031e-8",
            "extra": "mean: 1.2697138585899297 usec\nrounds: 182362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 788881.0130716665,
            "unit": "iter/sec",
            "range": "stddev: 9.360788151980771e-8",
            "extra": "mean: 1.267618288981629 usec\nrounds: 185898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 785532.557949987,
            "unit": "iter/sec",
            "range": "stddev: 9.39930708399454e-8",
            "extra": "mean: 1.273021709768098 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 733727.0911390329,
            "unit": "iter/sec",
            "range": "stddev: 1.1502981571529203e-7",
            "extra": "mean: 1.362904562304776 usec\nrounds: 27704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788707.8045534155,
            "unit": "iter/sec",
            "range": "stddev: 1.0113338676892568e-7",
            "extra": "mean: 1.2678966712726052 usec\nrounds: 186706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 786170.3684120289,
            "unit": "iter/sec",
            "range": "stddev: 9.633345785417816e-8",
            "extra": "mean: 1.2719889227316996 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 787354.8352420579,
            "unit": "iter/sec",
            "range": "stddev: 1.038557743004313e-7",
            "extra": "mean: 1.2700753907132203 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 785749.3036353132,
            "unit": "iter/sec",
            "range": "stddev: 9.951380770357785e-8",
            "extra": "mean: 1.272670552011238 usec\nrounds: 181315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 702034.7010578095,
            "unit": "iter/sec",
            "range": "stddev: 1.5831219165612887e-7",
            "extra": "mean: 1.4244310124459991 usec\nrounds: 25289"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 702972.9199753063,
            "unit": "iter/sec",
            "range": "stddev: 1.656699058252965e-7",
            "extra": "mean: 1.4225299034778291 usec\nrounds: 188013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 730412.8132781805,
            "unit": "iter/sec",
            "range": "stddev: 1.104800999248017e-7",
            "extra": "mean: 1.3690887972130168 usec\nrounds: 113841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 695306.13278008,
            "unit": "iter/sec",
            "range": "stddev: 1.7800481340548361e-7",
            "extra": "mean: 1.4382154174329604 usec\nrounds: 199915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 735978.4984264297,
            "unit": "iter/sec",
            "range": "stddev: 9.046722847968993e-8",
            "extra": "mean: 1.3587353463967569 usec\nrounds: 166317"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72891.64451978673,
            "unit": "iter/sec",
            "range": "stddev: 0.000004170946460692756",
            "extra": "mean: 13.718993536063602 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58711.63452041671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011305844337584604",
            "extra": "mean: 17.032399253886457 usec\nrounds: 17920"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bede4d259aa497bd2d62d1dd249c0b43dc4067a2",
          "message": "Update version to 1.23.0.dev/0.44b0.dev (#3582)\n\n* Update version to 1.23.0.dev/0.44b0.dev\r\n\r\n* Update SHA\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2023-12-15T16:54:07-06:00",
          "tree_id": "c9bd56dc2412b8efcec819b34a70a5da26f7e702",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bede4d259aa497bd2d62d1dd249c0b43dc4067a2"
        },
        "date": 1702681333220,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 905308.1331150084,
            "unit": "iter/sec",
            "range": "stddev: 7.556850574762745e-8",
            "extra": "mean: 1.1045962843161183 usec\nrounds: 30510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 856950.8506421865,
            "unit": "iter/sec",
            "range": "stddev: 1.5161336459879368e-7",
            "extra": "mean: 1.1669280674038827 usec\nrounds: 92652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 770199.6988840349,
            "unit": "iter/sec",
            "range": "stddev: 1.3609628784708595e-7",
            "extra": "mean: 1.2983645688889902 usec\nrounds: 114131"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 658741.731199525,
            "unit": "iter/sec",
            "range": "stddev: 1.4791268163190647e-7",
            "extra": "mean: 1.518045620366371 usec\nrounds: 114582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565109.7944386901,
            "unit": "iter/sec",
            "range": "stddev: 1.4878302430341927e-7",
            "extra": "mean: 1.769567630646494 usec\nrounds: 101488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 904906.8582893085,
            "unit": "iter/sec",
            "range": "stddev: 1.399887154910223e-7",
            "extra": "mean: 1.1050861100671303 usec\nrounds: 54091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 851206.0992502259,
            "unit": "iter/sec",
            "range": "stddev: 1.3219748459348296e-7",
            "extra": "mean: 1.174803612052166 usec\nrounds: 129868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 764983.5041132035,
            "unit": "iter/sec",
            "range": "stddev: 1.5139796843739797e-7",
            "extra": "mean: 1.3072177303473178 usec\nrounds: 120389"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672441.0715164668,
            "unit": "iter/sec",
            "range": "stddev: 1.574051768804397e-7",
            "extra": "mean: 1.4871191578837282 usec\nrounds: 132807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 563617.020189557,
            "unit": "iter/sec",
            "range": "stddev: 1.6179391385845005e-7",
            "extra": "mean: 1.7742544390580641 usec\nrounds: 101450"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 906468.5610555597,
            "unit": "iter/sec",
            "range": "stddev: 1.1413817640303006e-7",
            "extra": "mean: 1.1031822205014208 usec\nrounds: 32305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 860080.632323997,
            "unit": "iter/sec",
            "range": "stddev: 1.455004789814918e-7",
            "extra": "mean: 1.1626816863646043 usec\nrounds: 132300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 773443.3011584639,
            "unit": "iter/sec",
            "range": "stddev: 1.3230722992287964e-7",
            "extra": "mean: 1.2929195954017563 usec\nrounds: 118830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 667571.6608740188,
            "unit": "iter/sec",
            "range": "stddev: 1.5983302579549585e-7",
            "extra": "mean: 1.4979665234601918 usec\nrounds: 118633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 570811.099189765,
            "unit": "iter/sec",
            "range": "stddev: 1.9008839639820338e-7",
            "extra": "mean: 1.7518930543212017 usec\nrounds: 120863"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 754987.3093988054,
            "unit": "iter/sec",
            "range": "stddev: 1.1062843879945223e-7",
            "extra": "mean: 1.3245255748686657 usec\nrounds: 3884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 808416.9853264663,
            "unit": "iter/sec",
            "range": "stddev: 7.093354199779901e-8",
            "extra": "mean: 1.236985390152541 usec\nrounds: 188211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 753169.1830183465,
            "unit": "iter/sec",
            "range": "stddev: 1.7389970252950374e-7",
            "extra": "mean: 1.3277229373518338 usec\nrounds: 165676"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805198.7821379004,
            "unit": "iter/sec",
            "range": "stddev: 7.271449959700598e-8",
            "extra": "mean: 1.2419293498493365 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 800147.9443816785,
            "unit": "iter/sec",
            "range": "stddev: 6.858447445622628e-8",
            "extra": "mean: 1.249768879644825 usec\nrounds: 188277"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 747797.3921633464,
            "unit": "iter/sec",
            "range": "stddev: 1.3263455598197535e-7",
            "extra": "mean: 1.3372606142782097 usec\nrounds: 19105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 795250.6077206717,
            "unit": "iter/sec",
            "range": "stddev: 6.701491241031224e-8",
            "extra": "mean: 1.2574652446556138 usec\nrounds: 185416"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 744411.5272373363,
            "unit": "iter/sec",
            "range": "stddev: 1.3615492391186128e-7",
            "extra": "mean: 1.3433429808794135 usec\nrounds: 189073"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 808098.1750487215,
            "unit": "iter/sec",
            "range": "stddev: 6.570040913883513e-8",
            "extra": "mean: 1.2374734046883702 usec\nrounds: 189073"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 808838.90626489,
            "unit": "iter/sec",
            "range": "stddev: 6.484894470733388e-8",
            "extra": "mean: 1.2363401318290517 usec\nrounds: 183860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 744253.4164179937,
            "unit": "iter/sec",
            "range": "stddev: 1.1653613158217852e-7",
            "extra": "mean: 1.3436283635927198 usec\nrounds: 26580"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 782436.3825024822,
            "unit": "iter/sec",
            "range": "stddev: 8.90224697765778e-8",
            "extra": "mean: 1.2780591781809527 usec\nrounds: 182455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 792029.120145708,
            "unit": "iter/sec",
            "range": "stddev: 6.274657721347842e-8",
            "extra": "mean: 1.2625798402665196 usec\nrounds: 181591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 796077.6438653194,
            "unit": "iter/sec",
            "range": "stddev: 6.651646853261294e-8",
            "extra": "mean: 1.2561588781020714 usec\nrounds: 182796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 739044.5123107713,
            "unit": "iter/sec",
            "range": "stddev: 1.3828124320878338e-7",
            "extra": "mean: 1.3530984715295415 usec\nrounds: 194943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 739397.9956322442,
            "unit": "iter/sec",
            "range": "stddev: 1.3120984420018873e-7",
            "extra": "mean: 1.3524515969845448 usec\nrounds: 27545"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 786250.6829079884,
            "unit": "iter/sec",
            "range": "stddev: 7.069300617419416e-8",
            "extra": "mean: 1.2718589906993134 usec\nrounds: 180613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 782876.3930886254,
            "unit": "iter/sec",
            "range": "stddev: 6.613020795024621e-8",
            "extra": "mean: 1.2773408533303356 usec\nrounds: 188409"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 792386.4718647426,
            "unit": "iter/sec",
            "range": "stddev: 6.01891157911864e-8",
            "extra": "mean: 1.2620104399898138 usec\nrounds: 184905"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 737083.2467720362,
            "unit": "iter/sec",
            "range": "stddev: 1.7368119981817074e-7",
            "extra": "mean: 1.3566988591578697 usec\nrounds: 193154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 703976.016508479,
            "unit": "iter/sec",
            "range": "stddev: 1.39140479449587e-7",
            "extra": "mean: 1.4205029383809349 usec\nrounds: 26273"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 735228.5087388803,
            "unit": "iter/sec",
            "range": "stddev: 1.5343286193549984e-7",
            "extra": "mean: 1.3601213610653862 usec\nrounds: 170897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 704386.6018471706,
            "unit": "iter/sec",
            "range": "stddev: 1.5390460162933538e-7",
            "extra": "mean: 1.4196749304680387 usec\nrounds: 147655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 722299.0477029216,
            "unit": "iter/sec",
            "range": "stddev: 7.28986845155812e-8",
            "extra": "mean: 1.384468113560764 usec\nrounds: 165014"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 735112.6376136775,
            "unit": "iter/sec",
            "range": "stddev: 7.555833415889221e-8",
            "extra": "mean: 1.3603357483367442 usec\nrounds: 163556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72377.52183980968,
            "unit": "iter/sec",
            "range": "stddev: 0.000003881946948597333",
            "extra": "mean: 13.816444312824924 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59717.4152689886,
            "unit": "iter/sec",
            "range": "stddev: 5.619429924719815e-7",
            "extra": "mean: 16.745533869737034 usec\nrounds: 26126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bede4d259aa497bd2d62d1dd249c0b43dc4067a2",
          "message": "Update version to 1.23.0.dev/0.44b0.dev (#3582)\n\n* Update version to 1.23.0.dev/0.44b0.dev\r\n\r\n* Update SHA\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2023-12-15T16:54:07-06:00",
          "tree_id": "c9bd56dc2412b8efcec819b34a70a5da26f7e702",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bede4d259aa497bd2d62d1dd249c0b43dc4067a2"
        },
        "date": 1702681386666,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 896122.6769966929,
            "unit": "iter/sec",
            "range": "stddev: 2.059917603507713e-7",
            "extra": "mean: 1.115918641130081 usec\nrounds: 31959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 851229.0914252552,
            "unit": "iter/sec",
            "range": "stddev: 2.3571817585237875e-7",
            "extra": "mean: 1.1747718799479119 usec\nrounds: 103694"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 761666.7289679248,
            "unit": "iter/sec",
            "range": "stddev: 2.1426909954893763e-7",
            "extra": "mean: 1.3129101770731433 usec\nrounds: 113564"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 675801.7213784055,
            "unit": "iter/sec",
            "range": "stddev: 2.2012831650451318e-7",
            "extra": "mean: 1.4797239609871673 usec\nrounds: 112035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 564233.7904226237,
            "unit": "iter/sec",
            "range": "stddev: 2.4231500187578976e-7",
            "extra": "mean: 1.7723149817932342 usec\nrounds: 108012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 909990.3378076997,
            "unit": "iter/sec",
            "range": "stddev: 1.8657524839347803e-7",
            "extra": "mean: 1.0989127669301926 usec\nrounds: 50349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 864696.4841296583,
            "unit": "iter/sec",
            "range": "stddev: 2.247629972338205e-7",
            "extra": "mean: 1.1564751544081142 usec\nrounds: 140986"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 767791.9338764257,
            "unit": "iter/sec",
            "range": "stddev: 1.8264639407174004e-7",
            "extra": "mean: 1.3024361886054243 usec\nrounds: 125864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 675937.2721481097,
            "unit": "iter/sec",
            "range": "stddev: 1.8374092319056255e-7",
            "extra": "mean: 1.47942722084555 usec\nrounds: 132284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 561015.7915432283,
            "unit": "iter/sec",
            "range": "stddev: 2.624472870948447e-7",
            "extra": "mean: 1.7824810193831169 usec\nrounds: 119041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928058.9350179463,
            "unit": "iter/sec",
            "range": "stddev: 1.4963680699679318e-7",
            "extra": "mean: 1.0775177763690864 usec\nrounds: 35315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 860875.2427354126,
            "unit": "iter/sec",
            "range": "stddev: 1.9432709932376837e-7",
            "extra": "mean: 1.161608500695782 usec\nrounds: 120999"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 769877.7316553034,
            "unit": "iter/sec",
            "range": "stddev: 2.7425042879755667e-7",
            "extra": "mean: 1.298907552306928 usec\nrounds: 133170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 680333.3660719382,
            "unit": "iter/sec",
            "range": "stddev: 2.0196361987297393e-7",
            "extra": "mean: 1.469867641173813 usec\nrounds: 120335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 561391.1226588144,
            "unit": "iter/sec",
            "range": "stddev: 2.863626324545245e-7",
            "extra": "mean: 1.781289300165422 usec\nrounds: 122350"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 728686.9304325365,
            "unit": "iter/sec",
            "range": "stddev: 1.1575625633501812e-7",
            "extra": "mean: 1.372331461202984 usec\nrounds: 3857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 778349.5280853501,
            "unit": "iter/sec",
            "range": "stddev: 1.1327215771464404e-7",
            "extra": "mean: 1.2847698417186486 usec\nrounds: 180370"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 735815.2909390612,
            "unit": "iter/sec",
            "range": "stddev: 2.2502196747247837e-7",
            "extra": "mean: 1.3590367206473535 usec\nrounds: 151402"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 778228.1145528384,
            "unit": "iter/sec",
            "range": "stddev: 1.1175021753937462e-7",
            "extra": "mean: 1.2849702822347782 usec\nrounds: 182672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 781312.8907440731,
            "unit": "iter/sec",
            "range": "stddev: 1.0890024001496903e-7",
            "extra": "mean: 1.2798969680989944 usec\nrounds: 188211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 729877.0965991848,
            "unit": "iter/sec",
            "range": "stddev: 2.3166938695863272e-7",
            "extra": "mean: 1.370093683798869 usec\nrounds: 19962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 790945.8523353825,
            "unit": "iter/sec",
            "range": "stddev: 1.1636028302170423e-7",
            "extra": "mean: 1.2643090510524264 usec\nrounds: 181929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 786864.3217273889,
            "unit": "iter/sec",
            "range": "stddev: 1.199741832567395e-7",
            "extra": "mean: 1.2708671271366303 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 777795.3310197174,
            "unit": "iter/sec",
            "range": "stddev: 1.217446782977748e-7",
            "extra": "mean: 1.285685269785516 usec\nrounds: 188046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 729317.2027699009,
            "unit": "iter/sec",
            "range": "stddev: 2.710487062301733e-7",
            "extra": "mean: 1.3711454991080188 usec\nrounds: 196477"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 722190.9340590137,
            "unit": "iter/sec",
            "range": "stddev: 1.7188535862596292e-7",
            "extra": "mean: 1.3846753716217173 usec\nrounds: 26529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 767302.4072341302,
            "unit": "iter/sec",
            "range": "stddev: 1.254725144943999e-7",
            "extra": "mean: 1.3032671220264604 usec\nrounds: 181652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 725008.4736724846,
            "unit": "iter/sec",
            "range": "stddev: 2.437888070027492e-7",
            "extra": "mean: 1.3792942238792925 usec\nrounds: 193189"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 776343.1595076551,
            "unit": "iter/sec",
            "range": "stddev: 1.1340362582970958e-7",
            "extra": "mean: 1.288090179907278 usec\nrounds: 180431"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 775437.4655792306,
            "unit": "iter/sec",
            "range": "stddev: 1.150323841377083e-7",
            "extra": "mean: 1.289594640946356 usec\nrounds: 179766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 715831.4281672441,
            "unit": "iter/sec",
            "range": "stddev: 3.0911872588503337e-7",
            "extra": "mean: 1.3969769426865173 usec\nrounds: 27862"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 762651.6109392435,
            "unit": "iter/sec",
            "range": "stddev: 1.1050467109884719e-7",
            "extra": "mean: 1.3112146957487578 usec\nrounds: 177420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 759072.521035945,
            "unit": "iter/sec",
            "range": "stddev: 1.1067530787731615e-7",
            "extra": "mean: 1.3173971818071468 usec\nrounds: 177508"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 718963.8911054659,
            "unit": "iter/sec",
            "range": "stddev: 2.555451838633065e-7",
            "extra": "mean: 1.3908904360445946 usec\nrounds: 178482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 763898.3506928346,
            "unit": "iter/sec",
            "range": "stddev: 1.1721320152722999e-7",
            "extra": "mean: 1.3090746944184755 usec\nrounds: 182300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 683000.8812740035,
            "unit": "iter/sec",
            "range": "stddev: 2.626610800664765e-7",
            "extra": "mean: 1.4641269541771265 usec\nrounds: 25258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 691713.6329180668,
            "unit": "iter/sec",
            "range": "stddev: 2.2922958281589828e-7",
            "extra": "mean: 1.4456849661635187 usec\nrounds: 192738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689356.2590487639,
            "unit": "iter/sec",
            "range": "stddev: 2.425698180713664e-7",
            "extra": "mean: 1.450628737860291 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 688883.4641622204,
            "unit": "iter/sec",
            "range": "stddev: 2.7708757441670415e-7",
            "extra": "mean: 1.4516243341914752 usec\nrounds: 189741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 686229.5649471295,
            "unit": "iter/sec",
            "range": "stddev: 2.218585311672065e-7",
            "extra": "mean: 1.4572382932481855 usec\nrounds: 183108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66336.6948212661,
            "unit": "iter/sec",
            "range": "stddev: 0.000005107108738863132",
            "extra": "mean: 15.074612967895739 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58066.203042782116,
            "unit": "iter/sec",
            "range": "stddev: 9.43925104796653e-7",
            "extra": "mean: 17.221721889809434 usec\nrounds: 21819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da48e0b131ff34ff382b7d1206f71b2e31929cab",
          "message": "Copy change log updates from release/v1.22.x-0.43bx (#3594)",
          "timestamp": "2023-12-27T09:53:13-08:00",
          "tree_id": "89c2f3018489692d3c4cedf59a50d648af5c849d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/da48e0b131ff34ff382b7d1206f71b2e31929cab"
        },
        "date": 1703699648456,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 910180.5448925727,
            "unit": "iter/sec",
            "range": "stddev: 1.2609046896928258e-7",
            "extra": "mean: 1.0986831190926285 usec\nrounds: 27129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 868618.3803790717,
            "unit": "iter/sec",
            "range": "stddev: 1.333171049830557e-7",
            "extra": "mean: 1.1512535568998576 usec\nrounds: 108066"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 777678.0064103686,
            "unit": "iter/sec",
            "range": "stddev: 1.2430172241967602e-7",
            "extra": "mean: 1.285879235052348 usec\nrounds: 121108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682604.0664637538,
            "unit": "iter/sec",
            "range": "stddev: 1.3200080181385182e-7",
            "extra": "mean: 1.464978087781579 usec\nrounds: 115234"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569424.3184455388,
            "unit": "iter/sec",
            "range": "stddev: 1.3166933671701518e-7",
            "extra": "mean: 1.7561596293075121 usec\nrounds: 120483"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 906660.0203165668,
            "unit": "iter/sec",
            "range": "stddev: 1.108873646700741e-7",
            "extra": "mean: 1.102949261676767 usec\nrounds: 52180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 872988.0989432184,
            "unit": "iter/sec",
            "range": "stddev: 1.0720760310930397e-7",
            "extra": "mean: 1.1454909880335526 usec\nrounds: 138584"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 777091.4764565593,
            "unit": "iter/sec",
            "range": "stddev: 1.3179537877399286e-7",
            "extra": "mean: 1.2868497857676626 usec\nrounds: 126442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681473.7164557874,
            "unit": "iter/sec",
            "range": "stddev: 1.5995312434588472e-7",
            "extra": "mean: 1.4674080244808352 usec\nrounds: 134218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 571196.0176531699,
            "unit": "iter/sec",
            "range": "stddev: 1.200421223198444e-7",
            "extra": "mean: 1.7507124858969163 usec\nrounds: 112741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 911849.6083297124,
            "unit": "iter/sec",
            "range": "stddev: 1.0286591932588043e-7",
            "extra": "mean: 1.0966720727464672 usec\nrounds: 34824"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 863222.422414362,
            "unit": "iter/sec",
            "range": "stddev: 1.1720130720971363e-7",
            "extra": "mean: 1.158449982338367 usec\nrounds: 128963"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779861.9025245387,
            "unit": "iter/sec",
            "range": "stddev: 1.057676706906919e-7",
            "extra": "mean: 1.282278306919262 usec\nrounds: 136922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 671294.3675241839,
            "unit": "iter/sec",
            "range": "stddev: 1.805404315821395e-7",
            "extra": "mean: 1.4896594525113072 usec\nrounds: 125496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 569789.5410119913,
            "unit": "iter/sec",
            "range": "stddev: 1.3355460610602352e-7",
            "extra": "mean: 1.755033969602041 usec\nrounds: 127766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 758041.1250694128,
            "unit": "iter/sec",
            "range": "stddev: 1.2075362244652213e-7",
            "extra": "mean: 1.3191896414702189 usec\nrounds: 3931"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 756881.2899521317,
            "unit": "iter/sec",
            "range": "stddev: 1.5846936826700855e-7",
            "extra": "mean: 1.3212111506458881 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 755980.9122858528,
            "unit": "iter/sec",
            "range": "stddev: 1.7450145092049341e-7",
            "extra": "mean: 1.322784720815647 usec\nrounds: 138120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805869.8352837005,
            "unit": "iter/sec",
            "range": "stddev: 6.626374809901985e-8",
            "extra": "mean: 1.2408951870595297 usec\nrounds: 186803"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 755277.3432471977,
            "unit": "iter/sec",
            "range": "stddev: 1.6522316149210835e-7",
            "extra": "mean: 1.324016944160744 usec\nrounds: 195155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 739915.1779556792,
            "unit": "iter/sec",
            "range": "stddev: 1.1867496935983132e-7",
            "extra": "mean: 1.3515062669249633 usec\nrounds: 19259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 796259.2281754479,
            "unit": "iter/sec",
            "range": "stddev: 6.664808220887533e-8",
            "extra": "mean: 1.2558724151824332 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 800233.4131603732,
            "unit": "iter/sec",
            "range": "stddev: 7.47034729140134e-8",
            "extra": "mean: 1.2496353983154562 usec\nrounds: 190448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 800969.4927937024,
            "unit": "iter/sec",
            "range": "stddev: 6.393234035450217e-8",
            "extra": "mean: 1.2484870010617992 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 800059.9956006107,
            "unit": "iter/sec",
            "range": "stddev: 6.759661760903926e-8",
            "extra": "mean: 1.2499062639037375 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 743033.4666760833,
            "unit": "iter/sec",
            "range": "stddev: 1.4918812303732043e-7",
            "extra": "mean: 1.3458344002638822 usec\nrounds: 30845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 785984.7329425544,
            "unit": "iter/sec",
            "range": "stddev: 7.328958455013075e-8",
            "extra": "mean: 1.2722893436571208 usec\nrounds: 186479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 788581.1250261521,
            "unit": "iter/sec",
            "range": "stddev: 6.996569717592639e-8",
            "extra": "mean: 1.2681003491769303 usec\nrounds: 183170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 791440.3763209317,
            "unit": "iter/sec",
            "range": "stddev: 7.040043966982031e-8",
            "extra": "mean: 1.263519059576633 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 781096.0484284323,
            "unit": "iter/sec",
            "range": "stddev: 1.2899090446346727e-7",
            "extra": "mean: 1.280252283969434 usec\nrounds: 180704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 732751.7398075507,
            "unit": "iter/sec",
            "range": "stddev: 1.5711993359694214e-7",
            "extra": "mean: 1.3647186975804917 usec\nrounds: 25994"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 737853.5342840407,
            "unit": "iter/sec",
            "range": "stddev: 1.7082254931354116e-7",
            "extra": "mean: 1.3552825236113115 usec\nrounds: 198547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 790460.3189171739,
            "unit": "iter/sec",
            "range": "stddev: 9.833482294055197e-8",
            "extra": "mean: 1.2650856419584322 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 790719.311114318,
            "unit": "iter/sec",
            "range": "stddev: 8.427994599238975e-8",
            "extra": "mean: 1.2646712758168939 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 741837.6885337295,
            "unit": "iter/sec",
            "range": "stddev: 1.5769614845657775e-7",
            "extra": "mean: 1.348003768825143 usec\nrounds: 170058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 707321.5059070188,
            "unit": "iter/sec",
            "range": "stddev: 1.3504456211485116e-7",
            "extra": "mean: 1.4137842433020202 usec\nrounds: 25005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 740592.395921075,
            "unit": "iter/sec",
            "range": "stddev: 6.791465888614033e-8",
            "extra": "mean: 1.3502704125881548 usec\nrounds: 166679"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 737413.363031788,
            "unit": "iter/sec",
            "range": "stddev: 6.931582236979234e-8",
            "extra": "mean: 1.3560915086873635 usec\nrounds: 168775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 738100.4520814412,
            "unit": "iter/sec",
            "range": "stddev: 6.497701887077707e-8",
            "extra": "mean: 1.35482913901489 usec\nrounds: 170328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 694615.3468159128,
            "unit": "iter/sec",
            "range": "stddev: 1.7495655098908612e-7",
            "extra": "mean: 1.4396457040345532 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73478.68682863707,
            "unit": "iter/sec",
            "range": "stddev: 0.000004044889680470328",
            "extra": "mean: 13.609388560959786 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57405.99188842752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011590792618498359",
            "extra": "mean: 17.419784365777854 usec\nrounds: 13913"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da48e0b131ff34ff382b7d1206f71b2e31929cab",
          "message": "Copy change log updates from release/v1.22.x-0.43bx (#3594)",
          "timestamp": "2023-12-27T09:53:13-08:00",
          "tree_id": "89c2f3018489692d3c4cedf59a50d648af5c849d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/da48e0b131ff34ff382b7d1206f71b2e31929cab"
        },
        "date": 1703699704150,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 903362.5240091973,
            "unit": "iter/sec",
            "range": "stddev: 8.190939009461314e-8",
            "extra": "mean: 1.1069752988666364 usec\nrounds: 33295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 869968.3698323839,
            "unit": "iter/sec",
            "range": "stddev: 2.2971561751772907e-7",
            "extra": "mean: 1.149467077972811 usec\nrounds: 93565"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767149.7260495638,
            "unit": "iter/sec",
            "range": "stddev: 2.3404327694318338e-7",
            "extra": "mean: 1.303526503423912 usec\nrounds: 129617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 675035.1522154744,
            "unit": "iter/sec",
            "range": "stddev: 1.9333116284890918e-7",
            "extra": "mean: 1.4814043338602243 usec\nrounds: 120079"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565519.516842064,
            "unit": "iter/sec",
            "range": "stddev: 2.1917435344786066e-7",
            "extra": "mean: 1.7682855679042389 usec\nrounds: 126115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 924543.6083642745,
            "unit": "iter/sec",
            "range": "stddev: 1.9610428585314783e-7",
            "extra": "mean: 1.0816147458627992 usec\nrounds: 50444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 872473.4773872736,
            "unit": "iter/sec",
            "range": "stddev: 1.9710543488883831e-7",
            "extra": "mean: 1.1461666468012528 usec\nrounds: 140103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779011.3374951386,
            "unit": "iter/sec",
            "range": "stddev: 2.090572152784342e-7",
            "extra": "mean: 1.2836783649586365 usec\nrounds: 131942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 682097.0255496381,
            "unit": "iter/sec",
            "range": "stddev: 1.9538695934321316e-7",
            "extra": "mean: 1.4660670880278266 usec\nrounds: 129305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570960.9186225915,
            "unit": "iter/sec",
            "range": "stddev: 2.8383507916167717e-7",
            "extra": "mean: 1.7514333597690699 usec\nrounds: 120160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 918467.8419087437,
            "unit": "iter/sec",
            "range": "stddev: 2.0278122270342283e-7",
            "extra": "mean: 1.0887697471495763 usec\nrounds: 35217"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 870135.1426680612,
            "unit": "iter/sec",
            "range": "stddev: 2.87128474909558e-7",
            "extra": "mean: 1.149246767500666 usec\nrounds: 143319"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779954.8688088495,
            "unit": "iter/sec",
            "range": "stddev: 2.626509310047553e-7",
            "extra": "mean: 1.2821254664737263 usec\nrounds: 119651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 687720.2825897915,
            "unit": "iter/sec",
            "range": "stddev: 2.378569729018133e-7",
            "extra": "mean: 1.4540795514045872 usec\nrounds: 121547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 575945.010259529,
            "unit": "iter/sec",
            "range": "stddev: 2.2415413600986846e-7",
            "extra": "mean: 1.7362768705112765 usec\nrounds: 122072"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 759749.7863186535,
            "unit": "iter/sec",
            "range": "stddev: 1.2263792017597834e-7",
            "extra": "mean: 1.3162228117831691 usec\nrounds: 3905"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 753876.7880224505,
            "unit": "iter/sec",
            "range": "stddev: 3.1602944878971885e-7",
            "extra": "mean: 1.3264767079819146 usec\nrounds: 195939"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 750471.6706577496,
            "unit": "iter/sec",
            "range": "stddev: 3.580979301460419e-7",
            "extra": "mean: 1.332495334732025 usec\nrounds: 134521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 807936.21388148,
            "unit": "iter/sec",
            "range": "stddev: 1.051555254305144e-7",
            "extra": "mean: 1.2377214720897445 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 798289.2560949612,
            "unit": "iter/sec",
            "range": "stddev: 1.0644201419338463e-7",
            "extra": "mean: 1.2526787657042502 usec\nrounds: 193607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 741905.6054359566,
            "unit": "iter/sec",
            "range": "stddev: 4.7514406163009073e-7",
            "extra": "mean: 1.3478803673580315 usec\nrounds: 18982"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 812167.4221761859,
            "unit": "iter/sec",
            "range": "stddev: 1.1376937782064382e-7",
            "extra": "mean: 1.23127322359289 usec\nrounds: 192842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 811309.227102163,
            "unit": "iter/sec",
            "range": "stddev: 1.0326285465425958e-7",
            "extra": "mean: 1.2325756525311604 usec\nrounds: 188376"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 812145.9677979944,
            "unit": "iter/sec",
            "range": "stddev: 1.1438533817760552e-7",
            "extra": "mean: 1.2313057500135625 usec\nrounds: 193957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 807871.4907165931,
            "unit": "iter/sec",
            "range": "stddev: 1.1215045931227888e-7",
            "extra": "mean: 1.2378206329734278 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 744257.044798504,
            "unit": "iter/sec",
            "range": "stddev: 2.4785908217844893e-7",
            "extra": "mean: 1.343621813174418 usec\nrounds: 29832"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 791850.7206096054,
            "unit": "iter/sec",
            "range": "stddev: 1.1282485254628422e-7",
            "extra": "mean: 1.2628642924390483 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 793953.33668832,
            "unit": "iter/sec",
            "range": "stddev: 9.710175579635002e-8",
            "extra": "mean: 1.2595198657028468 usec\nrounds: 185384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 741249.2520811807,
            "unit": "iter/sec",
            "range": "stddev: 2.0881732906096672e-7",
            "extra": "mean: 1.3490738738586696 usec\nrounds: 196513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 791989.4990933208,
            "unit": "iter/sec",
            "range": "stddev: 9.804328774578222e-8",
            "extra": "mean: 1.2626430036570084 usec\nrounds: 185448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 742229.719633831,
            "unit": "iter/sec",
            "range": "stddev: 2.7116543616414014e-7",
            "extra": "mean: 1.3472917798189712 usec\nrounds: 27896"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788034.6237466835,
            "unit": "iter/sec",
            "range": "stddev: 1.0429645652771527e-7",
            "extra": "mean: 1.2689797755909942 usec\nrounds: 178957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 788906.908804828,
            "unit": "iter/sec",
            "range": "stddev: 1.1034676745323565e-7",
            "extra": "mean: 1.2675766796300114 usec\nrounds: 180643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 738496.2078783269,
            "unit": "iter/sec",
            "range": "stddev: 2.3653587960346045e-7",
            "extra": "mean: 1.3541030940063514 usec\nrounds: 199655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 788989.2053879026,
            "unit": "iter/sec",
            "range": "stddev: 1.0453380416466506e-7",
            "extra": "mean: 1.2674444633350275 usec\nrounds: 185833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 701860.5036169371,
            "unit": "iter/sec",
            "range": "stddev: 1.5091881243372034e-7",
            "extra": "mean: 1.4247845474230905 usec\nrounds: 26293"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 700910.9035367465,
            "unit": "iter/sec",
            "range": "stddev: 2.976140986657648e-7",
            "extra": "mean: 1.4267148577002744 usec\nrounds: 192358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 727289.6185390982,
            "unit": "iter/sec",
            "range": "stddev: 1.5235954055984968e-7",
            "extra": "mean: 1.3749680656912184 usec\nrounds: 145929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 693542.0139002737,
            "unit": "iter/sec",
            "range": "stddev: 2.813950972498917e-7",
            "extra": "mean: 1.4418737148688336 usec\nrounds: 170544"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 692089.4125688164,
            "unit": "iter/sec",
            "range": "stddev: 2.2279914484972403e-7",
            "extra": "mean: 1.4449000112403352 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73424.15079342732,
            "unit": "iter/sec",
            "range": "stddev: 0.000004244337877564226",
            "extra": "mean: 13.619496980134178 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59839.897974511536,
            "unit": "iter/sec",
            "range": "stddev: 9.628069029829527e-7",
            "extra": "mean: 16.711258438741726 usec\nrounds: 25539"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iurisilvio@gmail.com",
            "name": "Iuri de Silvio",
            "username": "iurisilvio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e7334b8dd282c20db36acd09f225ac47be11d8d",
          "message": "Fix docker proto tests (#3611)\n\n* Fix docker proto tests\r\n\r\n* Remove changelog",
          "timestamp": "2024-01-05T16:08:18-06:00",
          "tree_id": "4d8540fa0761f876054db82164da036d0108d5ae",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8e7334b8dd282c20db36acd09f225ac47be11d8d"
        },
        "date": 1704492557368,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 912838.3233784873,
            "unit": "iter/sec",
            "range": "stddev: 1.5798527614829447e-7",
            "extra": "mean: 1.0954842433640608 usec\nrounds: 31334"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 862495.9350283586,
            "unit": "iter/sec",
            "range": "stddev: 8.470065080070153e-8",
            "extra": "mean: 1.1594257542409405 usec\nrounds: 88070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 779165.4602641648,
            "unit": "iter/sec",
            "range": "stddev: 1.3751767306068822e-7",
            "extra": "mean: 1.2834244470500071 usec\nrounds: 120890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 678784.7872382473,
            "unit": "iter/sec",
            "range": "stddev: 1.1913677673696414e-7",
            "extra": "mean: 1.4732209955215292 usec\nrounds: 105063"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 568543.1748730721,
            "unit": "iter/sec",
            "range": "stddev: 3.7740178396607436e-7",
            "extra": "mean: 1.7588813729463046 usec\nrounds: 109387"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 909705.4086021978,
            "unit": "iter/sec",
            "range": "stddev: 9.760153583749199e-8",
            "extra": "mean: 1.0992569578502824 usec\nrounds: 54455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 874965.0156175965,
            "unit": "iter/sec",
            "range": "stddev: 1.2178787520301342e-7",
            "extra": "mean: 1.1429028385713769 usec\nrounds: 134386"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 771439.6231854071,
            "unit": "iter/sec",
            "range": "stddev: 1.0883196264766022e-7",
            "extra": "mean: 1.2962777253660211 usec\nrounds: 136505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 673078.5069530924,
            "unit": "iter/sec",
            "range": "stddev: 1.5379062252253572e-7",
            "extra": "mean: 1.485710789558299 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570495.1953533004,
            "unit": "iter/sec",
            "range": "stddev: 3.418765755043796e-7",
            "extra": "mean: 1.752863140908159 usec\nrounds: 123675"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 904834.941156676,
            "unit": "iter/sec",
            "range": "stddev: 1.1090095126281674e-7",
            "extra": "mean: 1.1051739433511174 usec\nrounds: 37213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 863610.145609812,
            "unit": "iter/sec",
            "range": "stddev: 1.0408207527938688e-7",
            "extra": "mean: 1.1579298889476113 usec\nrounds: 137378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 771075.740331426,
            "unit": "iter/sec",
            "range": "stddev: 8.73193112655334e-8",
            "extra": "mean: 1.2968894593547673 usec\nrounds: 129899"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 677785.5848969406,
            "unit": "iter/sec",
            "range": "stddev: 1.2937301030515152e-7",
            "extra": "mean: 1.4753928414574546 usec\nrounds: 128010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 571900.9335079107,
            "unit": "iter/sec",
            "range": "stddev: 3.5446539059735763e-7",
            "extra": "mean: 1.748554585959891 usec\nrounds: 119438"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 737561.8446033649,
            "unit": "iter/sec",
            "range": "stddev: 1.1209232047617285e-7",
            "extra": "mean: 1.3558185083960859 usec\nrounds: 3951"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 795443.0424992255,
            "unit": "iter/sec",
            "range": "stddev: 9.38987453095062e-8",
            "extra": "mean: 1.2571610367702395 usec\nrounds: 187718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 746533.9210299613,
            "unit": "iter/sec",
            "range": "stddev: 1.7317883623584953e-7",
            "extra": "mean: 1.3395238606443256 usec\nrounds: 144554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 794119.7512861774,
            "unit": "iter/sec",
            "range": "stddev: 9.868525396517872e-8",
            "extra": "mean: 1.2592559225234903 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 790825.1087543154,
            "unit": "iter/sec",
            "range": "stddev: 1.0804321302314953e-7",
            "extra": "mean: 1.2645020864033651 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 729875.8453935503,
            "unit": "iter/sec",
            "range": "stddev: 1.4015802545135685e-7",
            "extra": "mean: 1.370096032511938 usec\nrounds: 18978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 731223.0998624437,
            "unit": "iter/sec",
            "range": "stddev: 1.6832444440961355e-7",
            "extra": "mean: 1.3675716757144545 usec\nrounds: 199878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 778835.0211165374,
            "unit": "iter/sec",
            "range": "stddev: 9.95167861061563e-8",
            "extra": "mean: 1.2839689701759953 usec\nrounds: 179857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 733326.4022800354,
            "unit": "iter/sec",
            "range": "stddev: 3.164972981156485e-7",
            "extra": "mean: 1.3636492520804262 usec\nrounds: 199358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 779923.8736093965,
            "unit": "iter/sec",
            "range": "stddev: 1.105917595602133e-7",
            "extra": "mean: 1.2821764198243053 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 733083.1929984515,
            "unit": "iter/sec",
            "range": "stddev: 1.7425867471500005e-7",
            "extra": "mean: 1.3641016593352895 usec\nrounds: 27515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 777210.4287846863,
            "unit": "iter/sec",
            "range": "stddev: 1.0168160916642012e-7",
            "extra": "mean: 1.2866528329575901 usec\nrounds: 177186"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 780068.9948672744,
            "unit": "iter/sec",
            "range": "stddev: 9.88789409901219e-8",
            "extra": "mean: 1.2819378882891581 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 778388.2495431692,
            "unit": "iter/sec",
            "range": "stddev: 7.583695304907866e-8",
            "extra": "mean: 1.2847059299609074 usec\nrounds: 178008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 777517.9459948438,
            "unit": "iter/sec",
            "range": "stddev: 9.864920627872575e-8",
            "extra": "mean: 1.286143947096279 usec\nrounds: 176661"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 727956.2076046076,
            "unit": "iter/sec",
            "range": "stddev: 6.551830743932776e-7",
            "extra": "mean: 1.3737090082528072 usec\nrounds: 27563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 769323.1390918024,
            "unit": "iter/sec",
            "range": "stddev: 1.3059931222761505e-7",
            "extra": "mean: 1.2998439136778275 usec\nrounds: 168299"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 729258.6229918506,
            "unit": "iter/sec",
            "range": "stddev: 3.3156940628116026e-7",
            "extra": "mean: 1.3712556402794498 usec\nrounds: 170004"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 729311.7217158582,
            "unit": "iter/sec",
            "range": "stddev: 1.90530449226946e-7",
            "extra": "mean: 1.371155803786193 usec\nrounds: 177890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 724062.2549318697,
            "unit": "iter/sec",
            "range": "stddev: 1.826416096601506e-7",
            "extra": "mean: 1.3810967125942706 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 696725.4925517732,
            "unit": "iter/sec",
            "range": "stddev: 1.5767946245027456e-7",
            "extra": "mean: 1.4352855043920911 usec\nrounds: 24176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 700273.947886612,
            "unit": "iter/sec",
            "range": "stddev: 3.0786126032373427e-7",
            "extra": "mean: 1.4280125699634332 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 732193.3978873667,
            "unit": "iter/sec",
            "range": "stddev: 1.0273452744955295e-7",
            "extra": "mean: 1.3657593784447506 usec\nrounds: 170490"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 692875.2361903779,
            "unit": "iter/sec",
            "range": "stddev: 1.6789532898360765e-7",
            "extra": "mean: 1.4432612796183626 usec\nrounds: 188509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 688768.0110764763,
            "unit": "iter/sec",
            "range": "stddev: 1.782528557729641e-7",
            "extra": "mean: 1.4518676592385567 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71079.41064991168,
            "unit": "iter/sec",
            "range": "stddev: 0.000004030058632232089",
            "extra": "mean: 14.06877168587276 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59253.11324841778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010873260463463528",
            "extra": "mean: 16.876750354154645 usec\nrounds: 19332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iurisilvio@gmail.com",
            "name": "Iuri de Silvio",
            "username": "iurisilvio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e7334b8dd282c20db36acd09f225ac47be11d8d",
          "message": "Fix docker proto tests (#3611)\n\n* Fix docker proto tests\r\n\r\n* Remove changelog",
          "timestamp": "2024-01-05T16:08:18-06:00",
          "tree_id": "4d8540fa0761f876054db82164da036d0108d5ae",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8e7334b8dd282c20db36acd09f225ac47be11d8d"
        },
        "date": 1704492649016,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 917436.3273859115,
            "unit": "iter/sec",
            "range": "stddev: 1.925488752074242e-7",
            "extra": "mean: 1.0899938994669423 usec\nrounds: 31142"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 870117.7110816997,
            "unit": "iter/sec",
            "range": "stddev: 2.1261668145981293e-7",
            "extra": "mean: 1.1492697910456682 usec\nrounds: 96630"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 766370.6112764756,
            "unit": "iter/sec",
            "range": "stddev: 1.9695502092571606e-7",
            "extra": "mean: 1.3048517065840881 usec\nrounds: 121961"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 671067.1556395952,
            "unit": "iter/sec",
            "range": "stddev: 2.1698535709752243e-7",
            "extra": "mean: 1.4901638257752285 usec\nrounds: 115531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 564055.6439009049,
            "unit": "iter/sec",
            "range": "stddev: 2.0432797767591765e-7",
            "extra": "mean: 1.7728747346346616 usec\nrounds: 111616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 904436.4241548481,
            "unit": "iter/sec",
            "range": "stddev: 1.3200049182432812e-7",
            "extra": "mean: 1.1056609102562973 usec\nrounds: 54918"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 860968.046927627,
            "unit": "iter/sec",
            "range": "stddev: 2.1271280561249314e-7",
            "extra": "mean: 1.1614832903131653 usec\nrounds: 138655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 762926.3260914589,
            "unit": "iter/sec",
            "range": "stddev: 2.0814019638335878e-7",
            "extra": "mean: 1.3107425524599357 usec\nrounds: 136748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 669007.0335605274,
            "unit": "iter/sec",
            "range": "stddev: 2.3595177460278834e-7",
            "extra": "mean: 1.494752595765537 usec\nrounds: 118725"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 565553.7401832981,
            "unit": "iter/sec",
            "range": "stddev: 2.2298748269927375e-7",
            "extra": "mean: 1.768178563677956 usec\nrounds: 119998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 911742.7509243685,
            "unit": "iter/sec",
            "range": "stddev: 2.919097142998632e-7",
            "extra": "mean: 1.0968006041025848 usec\nrounds: 35701"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 871053.1341102545,
            "unit": "iter/sec",
            "range": "stddev: 1.816512104131778e-7",
            "extra": "mean: 1.1480355914469667 usec\nrounds: 120972"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 775990.2118036,
            "unit": "iter/sec",
            "range": "stddev: 2.0495628246625248e-7",
            "extra": "mean: 1.2886760487297175 usec\nrounds: 135540"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 677243.7671346688,
            "unit": "iter/sec",
            "range": "stddev: 2.2991321957955202e-7",
            "extra": "mean: 1.4765732052889482 usec\nrounds: 116966"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567780.4350032368,
            "unit": "iter/sec",
            "range": "stddev: 2.5879903665900377e-7",
            "extra": "mean: 1.7612442034821072 usec\nrounds: 122183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 748769.598111445,
            "unit": "iter/sec",
            "range": "stddev: 1.476591800143503e-7",
            "extra": "mean: 1.3355243088424142 usec\nrounds: 3852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 799813.9044262447,
            "unit": "iter/sec",
            "range": "stddev: 1.2254517294563574e-7",
            "extra": "mean: 1.2502908419895014 usec\nrounds: 191740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 749739.5262422807,
            "unit": "iter/sec",
            "range": "stddev: 2.1451949562801425e-7",
            "extra": "mean: 1.3337965586688927 usec\nrounds: 158838"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805506.047708958,
            "unit": "iter/sec",
            "range": "stddev: 9.756816814808214e-8",
            "extra": "mean: 1.24145560774401 usec\nrounds: 187455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 802705.0834265111,
            "unit": "iter/sec",
            "range": "stddev: 1.1783076423154614e-7",
            "extra": "mean: 1.2457875509287857 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 748510.4651126224,
            "unit": "iter/sec",
            "range": "stddev: 2.6799414476259314e-7",
            "extra": "mean: 1.3359866649954428 usec\nrounds: 19649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 800299.4126288487,
            "unit": "iter/sec",
            "range": "stddev: 1.047818208598125e-7",
            "extra": "mean: 1.2495323427955152 usec\nrounds: 188641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 799220.4235906898,
            "unit": "iter/sec",
            "range": "stddev: 1.4806259644602056e-7",
            "extra": "mean: 1.2512192762883358 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 749834.9607913595,
            "unit": "iter/sec",
            "range": "stddev: 2.459165769710256e-7",
            "extra": "mean: 1.3336268009491337 usec\nrounds: 183546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 804763.3575246985,
            "unit": "iter/sec",
            "range": "stddev: 1.0658670990136315e-7",
            "extra": "mean: 1.2426013071417825 usec\nrounds: 190786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 739645.1527292312,
            "unit": "iter/sec",
            "range": "stddev: 2.3719132157213086e-7",
            "extra": "mean: 1.3519996667457095 usec\nrounds: 28758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 783942.5605093929,
            "unit": "iter/sec",
            "range": "stddev: 1.0910600164840579e-7",
            "extra": "mean: 1.2756036607455226 usec\nrounds: 184176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 790941.9267208395,
            "unit": "iter/sec",
            "range": "stddev: 1.024435663665988e-7",
            "extra": "mean: 1.2643153260896067 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 787351.3192588307,
            "unit": "iter/sec",
            "range": "stddev: 9.902090719039272e-8",
            "extra": "mean: 1.2700810623411987 usec\nrounds: 175105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788531.4023699008,
            "unit": "iter/sec",
            "range": "stddev: 1.0261980493301643e-7",
            "extra": "mean: 1.268180312153122 usec\nrounds: 181806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 734039.3267928993,
            "unit": "iter/sec",
            "range": "stddev: 1.350222046652963e-7",
            "extra": "mean: 1.362324828519901 usec\nrounds: 28922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 783635.2187634322,
            "unit": "iter/sec",
            "range": "stddev: 9.857323176270507e-8",
            "extra": "mean: 1.2761039525226916 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 788233.0067041566,
            "unit": "iter/sec",
            "range": "stddev: 1.1100727759120002e-7",
            "extra": "mean: 1.268660397997422 usec\nrounds: 172683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 786008.402406376,
            "unit": "iter/sec",
            "range": "stddev: 1.1477136453480473e-7",
            "extra": "mean: 1.2722510305723014 usec\nrounds: 188973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 789951.9031798034,
            "unit": "iter/sec",
            "range": "stddev: 1.1167286424573042e-7",
            "extra": "mean: 1.2658998553895335 usec\nrounds: 183421"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 706526.2592343832,
            "unit": "iter/sec",
            "range": "stddev: 1.8129026511895494e-7",
            "extra": "mean: 1.415375560256791 usec\nrounds: 24827"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 736925.5677160779,
            "unit": "iter/sec",
            "range": "stddev: 1.315308007904501e-7",
            "extra": "mean: 1.3569891503415412 usec\nrounds: 196225"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 738875.0666337627,
            "unit": "iter/sec",
            "range": "stddev: 1.1569297346718552e-7",
            "extra": "mean: 1.353408776609414 usec\nrounds: 167146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 694967.7001867332,
            "unit": "iter/sec",
            "range": "stddev: 2.972126723276872e-7",
            "extra": "mean: 1.4389157938294208 usec\nrounds: 197889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 692108.3646194563,
            "unit": "iter/sec",
            "range": "stddev: 2.5572962455840217e-7",
            "extra": "mean: 1.444860445444598 usec\nrounds: 193537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70695.87636320105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054098937994048976",
            "extra": "mean: 14.14509659463709 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58804.03969881098,
            "unit": "iter/sec",
            "range": "stddev: 0.000001203195224137895",
            "extra": "mean: 17.00563439385985 usec\nrounds: 21763"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "975733c71473cddddd0859c6fcbd2b02405f7e12",
          "message": "Separate contrib jobs per instrumentation (#3507)\n\n* Separate contrib jobs per instrumentation\r\n\r\nFixes #3499\r\n\r\n* Separate exporters\r\n\r\n* Refactor listings\r\n\r\n* Fix lists",
          "timestamp": "2024-01-05T16:21:29-06:00",
          "tree_id": "d5e1153216836475c72039dd7ce91c85506252d0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/975733c71473cddddd0859c6fcbd2b02405f7e12"
        },
        "date": 1704493401583,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 916372.3514873286,
            "unit": "iter/sec",
            "range": "stddev: 3.194006682284697e-7",
            "extra": "mean: 1.0912594627903587 usec\nrounds: 24038"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 877024.6877814182,
            "unit": "iter/sec",
            "range": "stddev: 1.5873812079363854e-7",
            "extra": "mean: 1.1402187577292364 usec\nrounds: 81592"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 788725.7080179658,
            "unit": "iter/sec",
            "range": "stddev: 2.3875678814765266e-7",
            "extra": "mean: 1.2678678909971852 usec\nrounds: 111177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 680571.1121642129,
            "unit": "iter/sec",
            "range": "stddev: 2.7398317439154685e-7",
            "extra": "mean: 1.469354167590224 usec\nrounds: 96042"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570467.1790403432,
            "unit": "iter/sec",
            "range": "stddev: 2.44178474732196e-7",
            "extra": "mean: 1.7529492260750739 usec\nrounds: 104756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 919550.5068998336,
            "unit": "iter/sec",
            "range": "stddev: 2.1814483063184284e-7",
            "extra": "mean: 1.0874878459600803 usec\nrounds: 53410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 864684.9045537733,
            "unit": "iter/sec",
            "range": "stddev: 2.899980485856174e-7",
            "extra": "mean: 1.156490641543068 usec\nrounds: 124738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782307.2986108817,
            "unit": "iter/sec",
            "range": "stddev: 3.0988441693174805e-7",
            "extra": "mean: 1.2782700631525084 usec\nrounds: 106122"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 675976.2423366574,
            "unit": "iter/sec",
            "range": "stddev: 3.425799591101985e-7",
            "extra": "mean: 1.479341931520085 usec\nrounds: 116484"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568452.8782689559,
            "unit": "iter/sec",
            "range": "stddev: 3.621343577811072e-7",
            "extra": "mean: 1.7591607646445295 usec\nrounds: 106396"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 932443.1399152629,
            "unit": "iter/sec",
            "range": "stddev: 2.353373040903461e-7",
            "extra": "mean: 1.0724514527404603 usec\nrounds: 35076"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 882467.0908906109,
            "unit": "iter/sec",
            "range": "stddev: 2.0608012036836818e-7",
            "extra": "mean: 1.1331867333327654 usec\nrounds: 124767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 793488.4651395214,
            "unit": "iter/sec",
            "range": "stddev: 1.9014494456066892e-7",
            "extra": "mean: 1.260257765466278 usec\nrounds: 123590"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 681616.3233373261,
            "unit": "iter/sec",
            "range": "stddev: 2.2700269875065037e-7",
            "extra": "mean: 1.4671010152805695 usec\nrounds: 112599"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574633.8857573519,
            "unit": "iter/sec",
            "range": "stddev: 2.430363085103439e-7",
            "extra": "mean: 1.7402384801620727 usec\nrounds: 114692"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 763703.5120076688,
            "unit": "iter/sec",
            "range": "stddev: 1.1570899952275822e-7",
            "extra": "mean: 1.3094086700886591 usec\nrounds: 3741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 760323.0148393521,
            "unit": "iter/sec",
            "range": "stddev: 2.2705912035038307e-7",
            "extra": "mean: 1.315230475051829 usec\nrounds: 185962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 758436.3756032361,
            "unit": "iter/sec",
            "range": "stddev: 2.232466768547751e-7",
            "extra": "mean: 1.318502160718006 usec\nrounds: 136678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 813372.6145328252,
            "unit": "iter/sec",
            "range": "stddev: 1.0855262695669433e-7",
            "extra": "mean: 1.2294488185766712 usec\nrounds: 191467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 812471.5398293262,
            "unit": "iter/sec",
            "range": "stddev: 1.0836380219082464e-7",
            "extra": "mean: 1.2308123435438336 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 767979.0255814368,
            "unit": "iter/sec",
            "range": "stddev: 1.539738504927694e-7",
            "extra": "mean: 1.3021188947743723 usec\nrounds: 18349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 807569.9587325706,
            "unit": "iter/sec",
            "range": "stddev: 1.2612844085391518e-7",
            "extra": "mean: 1.2382828127601924 usec\nrounds: 189909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 747458.5435284547,
            "unit": "iter/sec",
            "range": "stddev: 2.2973401262094792e-7",
            "extra": "mean: 1.33786684045298 usec\nrounds: 198842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 820443.0405915681,
            "unit": "iter/sec",
            "range": "stddev: 1.254990400779903e-7",
            "extra": "mean: 1.2188536565304584 usec\nrounds: 189239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 812213.154389152,
            "unit": "iter/sec",
            "range": "stddev: 1.0699369717594965e-7",
            "extra": "mean: 1.231203895918281 usec\nrounds: 192911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 743757.5879225809,
            "unit": "iter/sec",
            "range": "stddev: 2.0920231906454062e-7",
            "extra": "mean: 1.3445240979566206 usec\nrounds: 28156"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 787184.5701935398,
            "unit": "iter/sec",
            "range": "stddev: 1.0962909710900753e-7",
            "extra": "mean: 1.270350103221836 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 790085.9043485917,
            "unit": "iter/sec",
            "range": "stddev: 1.0695253239054928e-7",
            "extra": "mean: 1.2656851546092038 usec\nrounds: 185576"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 737315.4215422638,
            "unit": "iter/sec",
            "range": "stddev: 2.1762294916875113e-7",
            "extra": "mean: 1.3562716454624961 usec\nrounds: 189173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788371.2835406511,
            "unit": "iter/sec",
            "range": "stddev: 1.1215365136876517e-7",
            "extra": "mean: 1.268437880574371 usec\nrounds: 185641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 748311.2448865642,
            "unit": "iter/sec",
            "range": "stddev: 2.597882040609719e-7",
            "extra": "mean: 1.336342339946514 usec\nrounds: 27537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 791387.901566595,
            "unit": "iter/sec",
            "range": "stddev: 9.717083174906878e-8",
            "extra": "mean: 1.2636028400490407 usec\nrounds: 186155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 744630.1117843228,
            "unit": "iter/sec",
            "range": "stddev: 2.3990261593932834e-7",
            "extra": "mean: 1.3429486454741215 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 795697.4067040129,
            "unit": "iter/sec",
            "range": "stddev: 1.2561380079709034e-7",
            "extra": "mean: 1.2567591543904386 usec\nrounds: 188575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 793473.6506139955,
            "unit": "iter/sec",
            "range": "stddev: 1.3795893531806897e-7",
            "extra": "mean: 1.2602812950703441 usec\nrounds: 184429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 716786.5844745379,
            "unit": "iter/sec",
            "range": "stddev: 2.797724265313776e-7",
            "extra": "mean: 1.3951153964929188 usec\nrounds: 24002"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 713833.4065573945,
            "unit": "iter/sec",
            "range": "stddev: 4.271492187122447e-7",
            "extra": "mean: 1.4008870848769905 usec\nrounds: 191946"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 708153.5547920989,
            "unit": "iter/sec",
            "range": "stddev: 2.4980786298696645e-7",
            "extra": "mean: 1.4121231097873705 usec\nrounds: 193050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 705593.7597436194,
            "unit": "iter/sec",
            "range": "stddev: 2.370342182458587e-7",
            "extra": "mean: 1.4172460940745202 usec\nrounds: 185448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 752788.5176026424,
            "unit": "iter/sec",
            "range": "stddev: 1.1495903080205483e-7",
            "extra": "mean: 1.3283943320291816 usec\nrounds: 167250"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71931.83933349303,
            "unit": "iter/sec",
            "range": "stddev: 0.000004096368931985899",
            "extra": "mean: 13.902049624558652 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59056.30522418913,
            "unit": "iter/sec",
            "range": "stddev: 8.885250786433812e-7",
            "extra": "mean: 16.93299294975883 usec\nrounds: 24082"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "975733c71473cddddd0859c6fcbd2b02405f7e12",
          "message": "Separate contrib jobs per instrumentation (#3507)\n\n* Separate contrib jobs per instrumentation\r\n\r\nFixes #3499\r\n\r\n* Separate exporters\r\n\r\n* Refactor listings\r\n\r\n* Fix lists",
          "timestamp": "2024-01-05T16:21:29-06:00",
          "tree_id": "d5e1153216836475c72039dd7ce91c85506252d0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/975733c71473cddddd0859c6fcbd2b02405f7e12"
        },
        "date": 1704493453869,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 930373.215839006,
            "unit": "iter/sec",
            "range": "stddev: 1.5467289874184302e-7",
            "extra": "mean: 1.0748374770206652 usec\nrounds: 32097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874765.4812824423,
            "unit": "iter/sec",
            "range": "stddev: 1.2976712828355568e-7",
            "extra": "mean: 1.1431635351385363 usec\nrounds: 96145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 783134.5823549402,
            "unit": "iter/sec",
            "range": "stddev: 4.3559010172498365e-7",
            "extra": "mean: 1.276919730696773 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 688201.9748251709,
            "unit": "iter/sec",
            "range": "stddev: 1.603165856187951e-7",
            "extra": "mean: 1.4530617995596968 usec\nrounds: 93581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569972.3675649266,
            "unit": "iter/sec",
            "range": "stddev: 1.2640979948181089e-7",
            "extra": "mean: 1.7544710180815708 usec\nrounds: 104005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915832.756042603,
            "unit": "iter/sec",
            "range": "stddev: 1.8276571522690047e-7",
            "extra": "mean: 1.0919024171193563 usec\nrounds: 57371"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 866681.3679943989,
            "unit": "iter/sec",
            "range": "stddev: 1.2783954572644595e-7",
            "extra": "mean: 1.1538265814045545 usec\nrounds: 146128"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782724.2463447165,
            "unit": "iter/sec",
            "range": "stddev: 1.195817658244418e-7",
            "extra": "mean: 1.2775891441589429 usec\nrounds: 129180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681561.1179399963,
            "unit": "iter/sec",
            "range": "stddev: 4.678134066463494e-7",
            "extra": "mean: 1.467219848195681 usec\nrounds: 116610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568807.8876459874,
            "unit": "iter/sec",
            "range": "stddev: 1.2365641122419007e-7",
            "extra": "mean: 1.7580628217701093 usec\nrounds: 115930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 942639.6775921165,
            "unit": "iter/sec",
            "range": "stddev: 1.3948170175606077e-7",
            "extra": "mean: 1.0608507405018266 usec\nrounds: 36249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883827.4908026193,
            "unit": "iter/sec",
            "range": "stddev: 1.302979479409888e-7",
            "extra": "mean: 1.1314425161089778 usec\nrounds: 133717"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 795157.6402138425,
            "unit": "iter/sec",
            "range": "stddev: 1.5524645280323786e-7",
            "extra": "mean: 1.257612263816102 usec\nrounds: 134927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 688574.4400619444,
            "unit": "iter/sec",
            "range": "stddev: 4.4257855652263086e-7",
            "extra": "mean: 1.4522758060988141 usec\nrounds: 128623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567803.5535281585,
            "unit": "iter/sec",
            "range": "stddev: 2.392401414988366e-7",
            "extra": "mean: 1.7611724931735708 usec\nrounds: 117042"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 759367.4569841394,
            "unit": "iter/sec",
            "range": "stddev: 1.507178820793702e-7",
            "extra": "mean: 1.316885508856994 usec\nrounds: 4039"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 821332.6440772454,
            "unit": "iter/sec",
            "range": "stddev: 1.1104728654008284e-7",
            "extra": "mean: 1.2175334892764245 usec\nrounds: 193120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 767122.916983359,
            "unit": "iter/sec",
            "range": "stddev: 1.6438122459817677e-7",
            "extra": "mean: 1.3035720584810695 usec\nrounds: 148554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 764996.7840277354,
            "unit": "iter/sec",
            "range": "stddev: 1.7278110442226895e-7",
            "extra": "mean: 1.307195037781681 usec\nrounds: 196729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 803777.3273851203,
            "unit": "iter/sec",
            "range": "stddev: 1.1636569907696871e-7",
            "extra": "mean: 1.2441256625802557 usec\nrounds: 194519"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 754731.2178276093,
            "unit": "iter/sec",
            "range": "stddev: 1.5959865752756407e-7",
            "extra": "mean: 1.3249750061728776 usec\nrounds: 18039"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 763884.7524336405,
            "unit": "iter/sec",
            "range": "stddev: 3.6674021900821634e-7",
            "extra": "mean: 1.3090979978512804 usec\nrounds: 197307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 819248.012331904,
            "unit": "iter/sec",
            "range": "stddev: 1.0416572271542768e-7",
            "extra": "mean: 1.22063158524316 usec\nrounds: 190111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 815194.4014409077,
            "unit": "iter/sec",
            "range": "stddev: 1.2242649953961944e-7",
            "extra": "mean: 1.226701260745212 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 816918.8687159871,
            "unit": "iter/sec",
            "range": "stddev: 1.268137771737612e-7",
            "extra": "mean: 1.2241117671474224 usec\nrounds: 195511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 741625.4731933812,
            "unit": "iter/sec",
            "range": "stddev: 1.4849360162801036e-7",
            "extra": "mean: 1.3483894986698317 usec\nrounds: 29685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 748816.6580586864,
            "unit": "iter/sec",
            "range": "stddev: 1.5689799672597674e-7",
            "extra": "mean: 1.3354403768106715 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 798136.2654965891,
            "unit": "iter/sec",
            "range": "stddev: 1.1904963017619638e-7",
            "extra": "mean: 1.2529188851953923 usec\nrounds: 183108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 746191.4611580261,
            "unit": "iter/sec",
            "range": "stddev: 1.6148450011920036e-7",
            "extra": "mean: 1.3401386266844764 usec\nrounds: 199210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 797628.3069976843,
            "unit": "iter/sec",
            "range": "stddev: 1.0948248449567057e-7",
            "extra": "mean: 1.2537167891696994 usec\nrounds: 187390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 742202.0689320363,
            "unit": "iter/sec",
            "range": "stddev: 1.692445927413542e-7",
            "extra": "mean: 1.3473419731083645 usec\nrounds: 27719"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 793419.49975759,
            "unit": "iter/sec",
            "range": "stddev: 6.350988436261915e-8",
            "extra": "mean: 1.2603673092298913 usec\nrounds: 180887"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 795184.4591232156,
            "unit": "iter/sec",
            "range": "stddev: 1.0240806414419962e-7",
            "extra": "mean: 1.2575698487651754 usec\nrounds: 183672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 741664.6818270896,
            "unit": "iter/sec",
            "range": "stddev: 3.382145230914612e-7",
            "extra": "mean: 1.3483182150948618 usec\nrounds: 198254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 795898.237059992,
            "unit": "iter/sec",
            "range": "stddev: 1.0216522709864555e-7",
            "extra": "mean: 1.2564420342152656 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 708579.1154503484,
            "unit": "iter/sec",
            "range": "stddev: 3.3342383681123884e-7",
            "extra": "mean: 1.4112750124796363 usec\nrounds: 24730"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 753881.1093026984,
            "unit": "iter/sec",
            "range": "stddev: 1.0981781061915813e-7",
            "extra": "mean: 1.3264691045580768 usec\nrounds: 173352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 698766.8883755852,
            "unit": "iter/sec",
            "range": "stddev: 1.5147584169561094e-7",
            "extra": "mean: 1.4310924238621092 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 707140.589693974,
            "unit": "iter/sec",
            "range": "stddev: 1.5438620865978488e-7",
            "extra": "mean: 1.4141459485910224 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 706611.7927411592,
            "unit": "iter/sec",
            "range": "stddev: 2.0595136176869685e-7",
            "extra": "mean: 1.415204232752329 usec\nrounds: 192773"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 68237.71844378687,
            "unit": "iter/sec",
            "range": "stddev: 0.00000524621828588475",
            "extra": "mean: 14.654651749879122 usec\nrounds: 32"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59274.64053657539,
            "unit": "iter/sec",
            "range": "stddev: 6.778221225571526e-7",
            "extra": "mean: 16.870621077540747 usec\nrounds: 22275"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jerevoss@gmail.com",
            "name": "Jeremy Voss",
            "username": "jeremydvoss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2",
          "message": "Improve Resource Detector timeout messaging (#3645)",
          "timestamp": "2024-01-24T10:11:30-08:00",
          "tree_id": "7eda395ced4c5e158072fcaeeb311f976d48b89b",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2"
        },
        "date": 1706123864030,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 909135.238108655,
            "unit": "iter/sec",
            "range": "stddev: 2.2185328498772998e-7",
            "extra": "mean: 1.0999463645038972 usec\nrounds: 25387"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 869081.4303969985,
            "unit": "iter/sec",
            "range": "stddev: 1.9114964539352833e-7",
            "extra": "mean: 1.1506401644586945 usec\nrounds: 92120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 772226.2772700901,
            "unit": "iter/sec",
            "range": "stddev: 2.282800552705008e-7",
            "extra": "mean: 1.2949572287738207 usec\nrounds: 111523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 679727.5419560788,
            "unit": "iter/sec",
            "range": "stddev: 2.0769318783126902e-7",
            "extra": "mean: 1.4711776973495299 usec\nrounds: 109387"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570982.0324108548,
            "unit": "iter/sec",
            "range": "stddev: 2.111135941193976e-7",
            "extra": "mean: 1.7513685952212972 usec\nrounds: 109656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 914540.4171135104,
            "unit": "iter/sec",
            "range": "stddev: 1.7631478482342345e-7",
            "extra": "mean: 1.093445386652477 usec\nrounds: 56071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 864545.5359838179,
            "unit": "iter/sec",
            "range": "stddev: 2.0966335329174943e-7",
            "extra": "mean: 1.1566770729572275 usec\nrounds: 134791"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 772919.003231587,
            "unit": "iter/sec",
            "range": "stddev: 2.3454234555708096e-7",
            "extra": "mean: 1.2937966278730157 usec\nrounds: 124018"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681951.5483520195,
            "unit": "iter/sec",
            "range": "stddev: 2.330096457214243e-7",
            "extra": "mean: 1.46637983653907 usec\nrounds: 126531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 576110.7027326238,
            "unit": "iter/sec",
            "range": "stddev: 2.2256901390303467e-7",
            "extra": "mean: 1.7357775081364972 usec\nrounds: 113648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 905825.549138271,
            "unit": "iter/sec",
            "range": "stddev: 1.7104291690795533e-7",
            "extra": "mean: 1.103965328590388 usec\nrounds: 34577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 874449.9618349244,
            "unit": "iter/sec",
            "range": "stddev: 1.8839486079890568e-7",
            "extra": "mean: 1.1435760119442677 usec\nrounds: 121492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 771010.9142130842,
            "unit": "iter/sec",
            "range": "stddev: 2.0530787040541388e-7",
            "extra": "mean: 1.2969985010142542 usec\nrounds: 124046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 681845.6520216324,
            "unit": "iter/sec",
            "range": "stddev: 2.090729096052215e-7",
            "extra": "mean: 1.466607577587477 usec\nrounds: 117916"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 575727.388704872,
            "unit": "iter/sec",
            "range": "stddev: 2.327397366630142e-7",
            "extra": "mean: 1.7369331729198272 usec\nrounds: 126621"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 787077.2592757912,
            "unit": "iter/sec",
            "range": "stddev: 1.1199589306387654e-7",
            "extra": "mean: 1.2705233040529262 usec\nrounds: 3626"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 818014.25963372,
            "unit": "iter/sec",
            "range": "stddev: 1.0759294740691497e-7",
            "extra": "mean: 1.2224725770034464 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 774111.5712497017,
            "unit": "iter/sec",
            "range": "stddev: 2.1409932357161282e-7",
            "extra": "mean: 1.2918034520342216 usec\nrounds: 79833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805567.5090902225,
            "unit": "iter/sec",
            "range": "stddev: 1.0041026514440225e-7",
            "extra": "mean: 1.2413608899511874 usec\nrounds: 186220"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 819324.6657276849,
            "unit": "iter/sec",
            "range": "stddev: 1.0174396308426391e-7",
            "extra": "mean: 1.220517386855244 usec\nrounds: 189106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 774408.6215893787,
            "unit": "iter/sec",
            "range": "stddev: 2.0231414778333493e-7",
            "extra": "mean: 1.2913079375945256 usec\nrounds: 19735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 812879.3755511943,
            "unit": "iter/sec",
            "range": "stddev: 1.0883744563069804e-7",
            "extra": "mean: 1.2301948235824332 usec\nrounds: 185512"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 814279.3223381883,
            "unit": "iter/sec",
            "range": "stddev: 1.1635868350580836e-7",
            "extra": "mean: 1.2280798155705563 usec\nrounds: 179616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 819338.1805841487,
            "unit": "iter/sec",
            "range": "stddev: 1.0315419309037127e-7",
            "extra": "mean: 1.2204972546098707 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 805554.0366733805,
            "unit": "iter/sec",
            "range": "stddev: 9.896758590670318e-8",
            "extra": "mean: 1.2413816509809874 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 762324.3756628234,
            "unit": "iter/sec",
            "range": "stddev: 1.5181471413064433e-7",
            "extra": "mean: 1.3117775476227205 usec\nrounds: 27456"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 780772.9089730082,
            "unit": "iter/sec",
            "range": "stddev: 1.1434999145194096e-7",
            "extra": "mean: 1.2807821435753357 usec\nrounds: 171470"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 793115.3458502507,
            "unit": "iter/sec",
            "range": "stddev: 1.099741987811042e-7",
            "extra": "mean: 1.2608506508318293 usec\nrounds: 172130"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 792354.9715244422,
            "unit": "iter/sec",
            "range": "stddev: 1.114875367758312e-7",
            "extra": "mean: 1.2620606116423574 usec\nrounds: 174536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 789830.9431400792,
            "unit": "iter/sec",
            "range": "stddev: 1.0601207136489805e-7",
            "extra": "mean: 1.2660937238345784 usec\nrounds: 175563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 752668.6122179929,
            "unit": "iter/sec",
            "range": "stddev: 2.961256084418753e-7",
            "extra": "mean: 1.3286059545556994 usec\nrounds: 27400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 792271.6880116694,
            "unit": "iter/sec",
            "range": "stddev: 9.847854180642352e-8",
            "extra": "mean: 1.262193279315152 usec\nrounds: 187849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 763643.490628204,
            "unit": "iter/sec",
            "range": "stddev: 2.2740490776175735e-7",
            "extra": "mean: 1.3095115878973311 usec\nrounds: 196585"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 796619.0163797088,
            "unit": "iter/sec",
            "range": "stddev: 1.06587902560359e-7",
            "extra": "mean: 1.2553052079331102 usec\nrounds: 188509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 796687.4507371758,
            "unit": "iter/sec",
            "range": "stddev: 1.1525436817030914e-7",
            "extra": "mean: 1.255197378940385 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 728985.8314243054,
            "unit": "iter/sec",
            "range": "stddev: 3.308577660886881e-7",
            "extra": "mean: 1.3717687736758646 usec\nrounds: 24646"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 749032.1499441972,
            "unit": "iter/sec",
            "range": "stddev: 1.1150519883213309e-7",
            "extra": "mean: 1.3350561789297026 usec\nrounds: 172185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 717850.9246184696,
            "unit": "iter/sec",
            "range": "stddev: 2.3684243722716086e-7",
            "extra": "mean: 1.3930468927535196 usec\nrounds: 190718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 719041.0839138806,
            "unit": "iter/sec",
            "range": "stddev: 2.3720640474112595e-7",
            "extra": "mean: 1.3907411167061627 usec\nrounds: 187849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 747296.9157998948,
            "unit": "iter/sec",
            "range": "stddev: 1.0951973640565744e-7",
            "extra": "mean: 1.3381561985032626 usec\nrounds: 163481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71575.20971504977,
            "unit": "iter/sec",
            "range": "stddev: 0.000004220464400344031",
            "extra": "mean: 13.97131777861539 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58021.486662056166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010209832862603754",
            "extra": "mean: 17.23499443963682 usec\nrounds: 17491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jerevoss@gmail.com",
            "name": "Jeremy Voss",
            "username": "jeremydvoss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2",
          "message": "Improve Resource Detector timeout messaging (#3645)",
          "timestamp": "2024-01-24T10:11:30-08:00",
          "tree_id": "7eda395ced4c5e158072fcaeeb311f976d48b89b",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2"
        },
        "date": 1706123920076,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 907023.5213649302,
            "unit": "iter/sec",
            "range": "stddev: 1.1492191278364124e-7",
            "extra": "mean: 1.102507240931475 usec\nrounds: 31564"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 861627.1359726439,
            "unit": "iter/sec",
            "range": "stddev: 1.2905616324555022e-7",
            "extra": "mean: 1.1605948306991916 usec\nrounds: 97472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 771089.6415790381,
            "unit": "iter/sec",
            "range": "stddev: 1.2835053590066656e-7",
            "extra": "mean: 1.2968660789583413 usec\nrounds: 111385"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674136.5931873663,
            "unit": "iter/sec",
            "range": "stddev: 1.461312367403863e-7",
            "extra": "mean: 1.483378902889588 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565666.6760153334,
            "unit": "iter/sec",
            "range": "stddev: 1.3735192635780963e-7",
            "extra": "mean: 1.767825545326791 usec\nrounds: 118358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 916926.5347903499,
            "unit": "iter/sec",
            "range": "stddev: 1.376692445785221e-7",
            "extra": "mean: 1.0905999140145337 usec\nrounds: 54923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 871595.8251411285,
            "unit": "iter/sec",
            "range": "stddev: 1.2435747896681613e-7",
            "extra": "mean: 1.1473207777677001 usec\nrounds: 133984"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 776627.6199896135,
            "unit": "iter/sec",
            "range": "stddev: 1.0549405232252862e-7",
            "extra": "mean: 1.287618382685609 usec\nrounds: 120591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 657350.2355425461,
            "unit": "iter/sec",
            "range": "stddev: 1.2082748293740652e-7",
            "extra": "mean: 1.5212590578516287 usec\nrounds: 130881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570663.864680535,
            "unit": "iter/sec",
            "range": "stddev: 1.2524215844865387e-7",
            "extra": "mean: 1.752345052651639 usec\nrounds: 111639"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 920506.1926028316,
            "unit": "iter/sec",
            "range": "stddev: 8.37811035928094e-8",
            "extra": "mean: 1.0863587969706003 usec\nrounds: 35664"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 872543.7698344372,
            "unit": "iter/sec",
            "range": "stddev: 1.292496004660135e-7",
            "extra": "mean: 1.1460743111944371 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 780870.4258593968,
            "unit": "iter/sec",
            "range": "stddev: 1.5982754772494166e-7",
            "extra": "mean: 1.2806221965692162 usec\nrounds: 135403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 680946.5549639357,
            "unit": "iter/sec",
            "range": "stddev: 1.4428122522681193e-7",
            "extra": "mean: 1.4685440328763568 usec\nrounds: 119305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567181.5719943143,
            "unit": "iter/sec",
            "range": "stddev: 1.5231867913521314e-7",
            "extra": "mean: 1.7631038266702086 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 781527.4492342706,
            "unit": "iter/sec",
            "range": "stddev: 2.3360447501333384e-7",
            "extra": "mean: 1.2795455885519897 usec\nrounds: 3903"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 817972.816552436,
            "unit": "iter/sec",
            "range": "stddev: 6.298023279319574e-8",
            "extra": "mean: 1.2225345143066808 usec\nrounds: 189909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 782216.6820628662,
            "unit": "iter/sec",
            "range": "stddev: 1.669215333038543e-7",
            "extra": "mean: 1.278418145420773 usec\nrounds: 147290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 817219.7523987994,
            "unit": "iter/sec",
            "range": "stddev: 6.227060743668887e-8",
            "extra": "mean: 1.2236610741048322 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 820550.9723958776,
            "unit": "iter/sec",
            "range": "stddev: 6.150518482601999e-8",
            "extra": "mean: 1.2186933336757375 usec\nrounds: 192152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 784152.8067645613,
            "unit": "iter/sec",
            "range": "stddev: 1.4177226066461193e-7",
            "extra": "mean: 1.2752616471858729 usec\nrounds: 20655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 814269.1071366022,
            "unit": "iter/sec",
            "range": "stddev: 6.652665681256974e-8",
            "extra": "mean: 1.2280952221269024 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 803326.7499311314,
            "unit": "iter/sec",
            "range": "stddev: 7.065421623453242e-8",
            "extra": "mean: 1.244823479469256 usec\nrounds: 187586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 818097.3491980198,
            "unit": "iter/sec",
            "range": "stddev: 6.177599186712665e-8",
            "extra": "mean: 1.222348417312804 usec\nrounds: 192290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 781687.8947885142,
            "unit": "iter/sec",
            "range": "stddev: 1.571070005140904e-7",
            "extra": "mean: 1.279282955085994 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 742708.4873818258,
            "unit": "iter/sec",
            "range": "stddev: 2.0992023158283957e-7",
            "extra": "mean: 1.3464232831446032 usec\nrounds: 28712"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 778905.2650299161,
            "unit": "iter/sec",
            "range": "stddev: 6.907124286694129e-8",
            "extra": "mean: 1.2838531781674272 usec\nrounds: 179736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 777613.3782196289,
            "unit": "iter/sec",
            "range": "stddev: 6.268436598550459e-8",
            "extra": "mean: 1.2859861057040098 usec\nrounds: 173577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 777808.3089926816,
            "unit": "iter/sec",
            "range": "stddev: 7.414939700627128e-8",
            "extra": "mean: 1.2856638177278834 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 745952.711373013,
            "unit": "iter/sec",
            "range": "stddev: 1.5027171068060798e-7",
            "extra": "mean: 1.3405675517411597 usec\nrounds: 186155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 767770.1588582966,
            "unit": "iter/sec",
            "range": "stddev: 1.1400498179878517e-7",
            "extra": "mean: 1.3024731274878383 usec\nrounds: 29288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 793732.9085561767,
            "unit": "iter/sec",
            "range": "stddev: 6.237427392448558e-8",
            "extra": "mean: 1.2598696478630693 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 795077.9113777267,
            "unit": "iter/sec",
            "range": "stddev: 6.727812077242037e-8",
            "extra": "mean: 1.2577383746797597 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 762471.0610806446,
            "unit": "iter/sec",
            "range": "stddev: 1.484570116286277e-7",
            "extra": "mean: 1.311525185733223 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 793492.7355050723,
            "unit": "iter/sec",
            "range": "stddev: 6.766186310406718e-8",
            "extra": "mean: 1.2602509830962498 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 730416.4047558641,
            "unit": "iter/sec",
            "range": "stddev: 1.641628308900623e-7",
            "extra": "mean: 1.369082065365498 usec\nrounds: 26110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 750581.6913484106,
            "unit": "iter/sec",
            "range": "stddev: 6.183330671054165e-8",
            "extra": "mean: 1.33230001680898 usec\nrounds: 175621"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 746336.2502378457,
            "unit": "iter/sec",
            "range": "stddev: 6.966194892129707e-8",
            "extra": "mean: 1.339878640065139 usec\nrounds: 171361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 719021.2972659334,
            "unit": "iter/sec",
            "range": "stddev: 1.575238377922685e-7",
            "extra": "mean: 1.3907793883192106 usec\nrounds: 193259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 745598.0178769915,
            "unit": "iter/sec",
            "range": "stddev: 8.147744059968138e-8",
            "extra": "mean: 1.3412052822342395 usec\nrounds: 170166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70969.15596859477,
            "unit": "iter/sec",
            "range": "stddev: 0.000003954253409838735",
            "extra": "mean: 14.090628334970186 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57428.65151346386,
            "unit": "iter/sec",
            "range": "stddev: 7.409813680852594e-7",
            "extra": "mean: 17.41291104085136 usec\nrounds: 18361"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1",
          "message": "Remove useless shebang lines (#3650)\n\nThese files do not have the executable bit set in their filesystem\r\npermissions, so the shebang lines are not useful.\r\n\r\nFixes #3643.",
          "timestamp": "2024-01-25T13:42:04-06:00",
          "tree_id": "69bd94a7c2ec8cbd11eae73727fd7ce944157d36",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1"
        },
        "date": 1706211783139,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 929081.874762512,
            "unit": "iter/sec",
            "range": "stddev: 1.1167330738217528e-7",
            "extra": "mean: 1.0763314054055955 usec\nrounds: 32495"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 878922.2611512892,
            "unit": "iter/sec",
            "range": "stddev: 9.686616458265339e-8",
            "extra": "mean: 1.137757051107242 usec\nrounds: 87624"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 776157.0464254258,
            "unit": "iter/sec",
            "range": "stddev: 1.5543125500150077e-7",
            "extra": "mean: 1.2883990483697572 usec\nrounds: 115631"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 685029.240538835,
            "unit": "iter/sec",
            "range": "stddev: 1.47336293598796e-7",
            "extra": "mean: 1.4597917005899095 usec\nrounds: 118777"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 572477.4736157155,
            "unit": "iter/sec",
            "range": "stddev: 2.125047451768114e-7",
            "extra": "mean: 1.7467936226103207 usec\nrounds: 110083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 925991.2473767463,
            "unit": "iter/sec",
            "range": "stddev: 7.614344448627533e-8",
            "extra": "mean: 1.079923814434439 usec\nrounds: 51317"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870668.5470045625,
            "unit": "iter/sec",
            "range": "stddev: 1.235702604421446e-7",
            "extra": "mean: 1.1485426956565594 usec\nrounds: 131201"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 773794.7927995023,
            "unit": "iter/sec",
            "range": "stddev: 1.6249548709915285e-7",
            "extra": "mean: 1.2923322944344364 usec\nrounds: 129931"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 683265.7493552341,
            "unit": "iter/sec",
            "range": "stddev: 1.6275188677027375e-7",
            "extra": "mean: 1.4635593851201427 usec\nrounds: 137766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 573069.463426002,
            "unit": "iter/sec",
            "range": "stddev: 1.690595928260428e-7",
            "extra": "mean: 1.744989157198612 usec\nrounds: 130341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928223.9299904968,
            "unit": "iter/sec",
            "range": "stddev: 7.887774826336306e-8",
            "extra": "mean: 1.0773262439056468 usec\nrounds: 37575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 884836.1153019683,
            "unit": "iter/sec",
            "range": "stddev: 1.3436869690135194e-7",
            "extra": "mean: 1.1301527850258797 usec\nrounds: 135745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 786898.3415367478,
            "unit": "iter/sec",
            "range": "stddev: 1.262673397570442e-7",
            "extra": "mean: 1.2708121840072533 usec\nrounds: 128346"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 691868.8365659239,
            "unit": "iter/sec",
            "range": "stddev: 1.8519558785942377e-7",
            "extra": "mean: 1.445360662525976 usec\nrounds: 125614"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 578863.5847678605,
            "unit": "iter/sec",
            "range": "stddev: 1.7304278962021245e-7",
            "extra": "mean: 1.7275227295581674 usec\nrounds: 120321"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 781561.7629603543,
            "unit": "iter/sec",
            "range": "stddev: 1.1639254195023167e-7",
            "extra": "mean: 1.2794894113195328 usec\nrounds: 3894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 808937.3817367458,
            "unit": "iter/sec",
            "range": "stddev: 7.127673267867979e-8",
            "extra": "mean: 1.2361896267583197 usec\nrounds: 179857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 771691.3688686847,
            "unit": "iter/sec",
            "range": "stddev: 1.9235581437535618e-7",
            "extra": "mean: 1.2958548460455381 usec\nrounds: 147940"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 812396.6470126826,
            "unit": "iter/sec",
            "range": "stddev: 8.267951937729955e-8",
            "extra": "mean: 1.2309258090578858 usec\nrounds: 184492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 811772.397423708,
            "unit": "iter/sec",
            "range": "stddev: 7.598648773209331e-8",
            "extra": "mean: 1.231872385872768 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 786618.8131073499,
            "unit": "iter/sec",
            "range": "stddev: 1.5294115561430453e-7",
            "extra": "mean: 1.2712637726648548 usec\nrounds: 19489"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 821071.0518827364,
            "unit": "iter/sec",
            "range": "stddev: 7.00746436323094e-8",
            "extra": "mean: 1.2179213939000468 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 823361.7046122928,
            "unit": "iter/sec",
            "range": "stddev: 7.572941566225136e-8",
            "extra": "mean: 1.2145330471386 usec\nrounds: 193328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 827364.6201717033,
            "unit": "iter/sec",
            "range": "stddev: 7.433446100714663e-8",
            "extra": "mean: 1.2086569519886765 usec\nrounds: 192496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 810688.1952033106,
            "unit": "iter/sec",
            "range": "stddev: 8.086198363511064e-8",
            "extra": "mean: 1.2335198735060062 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 766797.8497186642,
            "unit": "iter/sec",
            "range": "stddev: 2.0107055897543996e-7",
            "extra": "mean: 1.304124679492642 usec\nrounds: 30790"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 798331.2557395485,
            "unit": "iter/sec",
            "range": "stddev: 7.574974810685178e-8",
            "extra": "mean: 1.2526128631574522 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 805235.1628115991,
            "unit": "iter/sec",
            "range": "stddev: 7.16164794005404e-8",
            "extra": "mean: 1.2418732392514384 usec\nrounds: 181070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 806541.6870684039,
            "unit": "iter/sec",
            "range": "stddev: 7.634008992630699e-8",
            "extra": "mean: 1.2398615174310124 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 804675.9434261349,
            "unit": "iter/sec",
            "range": "stddev: 7.113667162101946e-8",
            "extra": "mean: 1.2427362942431432 usec\nrounds: 183923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 765014.193802814,
            "unit": "iter/sec",
            "range": "stddev: 1.3977249179449003e-7",
            "extra": "mean: 1.3071652893511603 usec\nrounds: 28152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 803044.3533258354,
            "unit": "iter/sec",
            "range": "stddev: 6.892143116300911e-8",
            "extra": "mean: 1.2452612310371975 usec\nrounds: 187783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 798910.8923572111,
            "unit": "iter/sec",
            "range": "stddev: 1.270289197106822e-7",
            "extra": "mean: 1.2517040505599684 usec\nrounds: 184683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 757281.2309103935,
            "unit": "iter/sec",
            "range": "stddev: 1.4930982390084905e-7",
            "extra": "mean: 1.3205133828522506 usec\nrounds: 153261"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 806391.641048339,
            "unit": "iter/sec",
            "range": "stddev: 7.208989398063538e-8",
            "extra": "mean: 1.2400922195819926 usec\nrounds: 179017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 725134.7580120855,
            "unit": "iter/sec",
            "range": "stddev: 1.5469241366947045e-7",
            "extra": "mean: 1.3790540157548667 usec\nrounds: 23942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 750067.0772946494,
            "unit": "iter/sec",
            "range": "stddev: 6.539795858380675e-8",
            "extra": "mean: 1.3332140954737162 usec\nrounds: 170707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 714449.0618190308,
            "unit": "iter/sec",
            "range": "stddev: 1.480637055747027e-7",
            "extra": "mean: 1.3996799120345111 usec\nrounds: 197597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 723391.5248218498,
            "unit": "iter/sec",
            "range": "stddev: 1.5182751120975826e-7",
            "extra": "mean: 1.3823772683074644 usec\nrounds: 197452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 747151.580173911,
            "unit": "iter/sec",
            "range": "stddev: 8.779021244682122e-8",
            "extra": "mean: 1.338416496110782 usec\nrounds: 167250"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70958.07054658182,
            "unit": "iter/sec",
            "range": "stddev: 0.000004032082099588738",
            "extra": "mean: 14.092829642873822 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57996.40716992807,
            "unit": "iter/sec",
            "range": "stddev: 6.107095908848393e-7",
            "extra": "mean: 17.24244739971606 usec\nrounds: 22892"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1",
          "message": "Remove useless shebang lines (#3650)\n\nThese files do not have the executable bit set in their filesystem\r\npermissions, so the shebang lines are not useful.\r\n\r\nFixes #3643.",
          "timestamp": "2024-01-25T13:42:04-06:00",
          "tree_id": "69bd94a7c2ec8cbd11eae73727fd7ce944157d36",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1"
        },
        "date": 1706211852203,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 909503.5211244732,
            "unit": "iter/sec",
            "range": "stddev: 1.2237290124341447e-7",
            "extra": "mean: 1.0995009659375927 usec\nrounds: 32087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 857803.7418523377,
            "unit": "iter/sec",
            "range": "stddev: 4.865426003440695e-7",
            "extra": "mean: 1.1657678221834336 usec\nrounds: 93695"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 762122.7097283192,
            "unit": "iter/sec",
            "range": "stddev: 1.1420512074496388e-7",
            "extra": "mean: 1.312124658188547 usec\nrounds: 120187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674290.8622991788,
            "unit": "iter/sec",
            "range": "stddev: 1.2390783248678422e-7",
            "extra": "mean: 1.4830395247982853 usec\nrounds: 112246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 559926.477123213,
            "unit": "iter/sec",
            "range": "stddev: 1.6511282997637265e-7",
            "extra": "mean: 1.7859487644481364 usec\nrounds: 111361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 907526.2107163956,
            "unit": "iter/sec",
            "range": "stddev: 6.980398730246342e-8",
            "extra": "mean: 1.1018965493135522 usec\nrounds: 54071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 853166.4139767804,
            "unit": "iter/sec",
            "range": "stddev: 1.0143610545678117e-7",
            "extra": "mean: 1.1721042737006004 usec\nrounds: 133451"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 769922.5709058616,
            "unit": "iter/sec",
            "range": "stddev: 4.4818022047915334e-7",
            "extra": "mean: 1.2988319056855784 usec\nrounds: 124247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 680212.3542549706,
            "unit": "iter/sec",
            "range": "stddev: 1.30827283385089e-7",
            "extra": "mean: 1.470129135033558 usec\nrounds: 126383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564772.1008111058,
            "unit": "iter/sec",
            "range": "stddev: 1.750879096730824e-7",
            "extra": "mean: 1.770625706482022 usec\nrounds: 120836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 918801.137512127,
            "unit": "iter/sec",
            "range": "stddev: 1.3234563293929572e-7",
            "extra": "mean: 1.0883747953422633 usec\nrounds: 35840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 872751.0203340809,
            "unit": "iter/sec",
            "range": "stddev: 9.794734168536153e-8",
            "extra": "mean: 1.14580215514066 usec\nrounds: 132528"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779744.4545202996,
            "unit": "iter/sec",
            "range": "stddev: 4.3356398125982287e-7",
            "extra": "mean: 1.282471448437812 usec\nrounds: 130088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 687312.8732229308,
            "unit": "iter/sec",
            "range": "stddev: 1.252802047096021e-7",
            "extra": "mean: 1.4549414669200424 usec\nrounds: 116231"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 572614.6595750471,
            "unit": "iter/sec",
            "range": "stddev: 1.208650351734362e-7",
            "extra": "mean: 1.7463751290302751 usec\nrounds: 121218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 790778.5178209811,
            "unit": "iter/sec",
            "range": "stddev: 1.0078362902133287e-7",
            "extra": "mean: 1.2645765880888322 usec\nrounds: 3983"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 782509.9173522523,
            "unit": "iter/sec",
            "range": "stddev: 1.4300066705846108e-7",
            "extra": "mean: 1.277939075051803 usec\nrounds: 179196"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 781455.2748354181,
            "unit": "iter/sec",
            "range": "stddev: 4.187432081220319e-7",
            "extra": "mean: 1.2796637660557215 usec\nrounds: 161368"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 819185.9070651146,
            "unit": "iter/sec",
            "range": "stddev: 1.1633943441484939e-7",
            "extra": "mean: 1.2207241254707195 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 783094.6928638965,
            "unit": "iter/sec",
            "range": "stddev: 2.0070771245994105e-7",
            "extra": "mean: 1.276984774782278 usec\nrounds: 172794"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 780702.0058698356,
            "unit": "iter/sec",
            "range": "stddev: 2.6384428143247954e-7",
            "extra": "mean: 1.2808984637945546 usec\nrounds: 17400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 814682.3798541696,
            "unit": "iter/sec",
            "range": "stddev: 1.3151278941571588e-7",
            "extra": "mean: 1.2274722330179804 usec\nrounds: 185065"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 824709.6868641496,
            "unit": "iter/sec",
            "range": "stddev: 1.0259243205104027e-7",
            "extra": "mean: 1.2125479013134535 usec\nrounds: 189306"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 785413.2770055583,
            "unit": "iter/sec",
            "range": "stddev: 1.624532573750211e-7",
            "extra": "mean: 1.2732150439480323 usec\nrounds: 193537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 775752.7932918109,
            "unit": "iter/sec",
            "range": "stddev: 1.720197420546775e-7",
            "extra": "mean: 1.2890704469868859 usec\nrounds: 197962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 753680.0265359482,
            "unit": "iter/sec",
            "range": "stddev: 8.856660770384646e-7",
            "extra": "mean: 1.3268230081619434 usec\nrounds: 29013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 800757.1573647817,
            "unit": "iter/sec",
            "range": "stddev: 6.125847313532484e-8",
            "extra": "mean: 1.2488180602605017 usec\nrounds: 181560"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 764785.3486222578,
            "unit": "iter/sec",
            "range": "stddev: 3.524963394380118e-7",
            "extra": "mean: 1.3075564297897124 usec\nrounds: 195867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 800841.4549383839,
            "unit": "iter/sec",
            "range": "stddev: 1.1150210003700756e-7",
            "extra": "mean: 1.248686608108891 usec\nrounds: 186544"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 795157.5680814172,
            "unit": "iter/sec",
            "range": "stddev: 1.1012361273590954e-7",
            "extra": "mean: 1.2576123778999344 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 755830.4825703895,
            "unit": "iter/sec",
            "range": "stddev: 9.371062816614943e-8",
            "extra": "mean: 1.323047989013689 usec\nrounds: 29613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 795080.2571942504,
            "unit": "iter/sec",
            "range": "stddev: 1.0119904849152261e-7",
            "extra": "mean: 1.257734663829899 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 793629.699896993,
            "unit": "iter/sec",
            "range": "stddev: 1.0006388493202168e-7",
            "extra": "mean: 1.2600334893336178 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 767141.1219478598,
            "unit": "iter/sec",
            "range": "stddev: 1.490280549458344e-7",
            "extra": "mean: 1.3035411235169934 usec\nrounds: 193607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 798284.1988011976,
            "unit": "iter/sec",
            "range": "stddev: 1.0526277310147688e-7",
            "extra": "mean: 1.2526867016805843 usec\nrounds: 186220"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 722675.0947450822,
            "unit": "iter/sec",
            "range": "stddev: 3.704772827273288e-7",
            "extra": "mean: 1.3837476997221578 usec\nrounds: 25219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 714769.8731422109,
            "unit": "iter/sec",
            "range": "stddev: 4.579097907907092e-7",
            "extra": "mean: 1.3990516914260593 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 718847.3806910124,
            "unit": "iter/sec",
            "range": "stddev: 2.2113420823730683e-7",
            "extra": "mean: 1.3911158708524773 usec\nrounds: 147858"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 711559.0607301033,
            "unit": "iter/sec",
            "range": "stddev: 1.6902693080175698e-7",
            "extra": "mean: 1.40536471979422 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 716893.7036484157,
            "unit": "iter/sec",
            "range": "stddev: 1.6298361025131657e-7",
            "extra": "mean: 1.3949069365664668 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 68749.75898278019,
            "unit": "iter/sec",
            "range": "stddev: 0.000005055984340186471",
            "extra": "mean: 14.545505537706262 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58476.7634774141,
            "unit": "iter/sec",
            "range": "stddev: 8.483173307377696e-7",
            "extra": "mean: 17.100809629900894 usec\nrounds: 18546"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "373ed5175cea87951aa6b8f0922284357828bb99",
          "message": "Don’t pin an exact version of responses for testing (#3642)\n\n* Don’t pin an exact version of responses for testing\r\n\r\nIn the test dependencies for opentelemetry-exporter-otlp-proto-http,\r\nallow `responses >= 0.22.0` rather than `responses == 0.22.0`.\r\n\r\nThese tests use responses in a very straightforward way, and it’s\r\nunlikely that they will be affected by any future breaking changes;\r\nmeanwhile, allowing newer versions helps with compatibility with newer\r\nPython interpreter versions and makes distribution packagers’ lives\r\neasier.\r\n\r\n* Upper-bound responses test dependency to the current minor release\r\n\r\nAs requested in:\r\n\r\nhttps://github.com/open-telemetry/opentelemetry-python/pull/3642#issuecomment-1904877072\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-01-25T14:00:06-06:00",
          "tree_id": "58b1e45f7efe446d36b3a82cd2f08d6d2108365e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/373ed5175cea87951aa6b8f0922284357828bb99"
        },
        "date": 1706212862051,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 919080.4757835576,
            "unit": "iter/sec",
            "range": "stddev: 3.189750053243143e-7",
            "extra": "mean: 1.0880440030536551 usec\nrounds: 32290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874276.2674943219,
            "unit": "iter/sec",
            "range": "stddev: 2.2673677506642377e-7",
            "extra": "mean: 1.1438032086425067 usec\nrounds: 95056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 787239.5500876687,
            "unit": "iter/sec",
            "range": "stddev: 2.370603050327331e-7",
            "extra": "mean: 1.2702613834488343 usec\nrounds: 117813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 687545.1454602471,
            "unit": "iter/sec",
            "range": "stddev: 2.4552815879869324e-7",
            "extra": "mean: 1.454449946454925 usec\nrounds: 115209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 568043.6787495323,
            "unit": "iter/sec",
            "range": "stddev: 2.91078293480902e-7",
            "extra": "mean: 1.7604280047642786 usec\nrounds: 108591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 928142.2800598384,
            "unit": "iter/sec",
            "range": "stddev: 1.8006410570454086e-7",
            "extra": "mean: 1.0774210177512102 usec\nrounds: 50816"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 875758.3579553503,
            "unit": "iter/sec",
            "range": "stddev: 2.0275559962322275e-7",
            "extra": "mean: 1.141867492232354 usec\nrounds: 138085"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 770602.4089174161,
            "unit": "iter/sec",
            "range": "stddev: 2.5107657777233043e-7",
            "extra": "mean: 1.2976860549980034 usec\nrounds: 133252"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 677098.7823846126,
            "unit": "iter/sec",
            "range": "stddev: 2.569198959329642e-7",
            "extra": "mean: 1.4768893786489927 usec\nrounds: 124767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 563596.2834230366,
            "unit": "iter/sec",
            "range": "stddev: 2.637202337058896e-7",
            "extra": "mean: 1.7743197203616015 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 938227.3878611281,
            "unit": "iter/sec",
            "range": "stddev: 1.5810188306656966e-7",
            "extra": "mean: 1.0658397025476891 usec\nrounds: 36884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883444.7433193693,
            "unit": "iter/sec",
            "range": "stddev: 1.9637531739178685e-7",
            "extra": "mean: 1.1319327072372374 usec\nrounds: 132561"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 789811.4341873468,
            "unit": "iter/sec",
            "range": "stddev: 2.2647728458730024e-7",
            "extra": "mean: 1.2661249973279007 usec\nrounds: 114058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 685467.4068033936,
            "unit": "iter/sec",
            "range": "stddev: 2.688457572498778e-7",
            "extra": "mean: 1.4588585687296158 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574399.0206381861,
            "unit": "iter/sec",
            "range": "stddev: 2.4260600704788594e-7",
            "extra": "mean: 1.7409500435584826 usec\nrounds: 112012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 787097.338804735,
            "unit": "iter/sec",
            "range": "stddev: 1.1733569355131128e-7",
            "extra": "mean: 1.2704908919125217 usec\nrounds: 3761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 818770.368607349,
            "unit": "iter/sec",
            "range": "stddev: 1.092025362253388e-7",
            "extra": "mean: 1.2213436615945268 usec\nrounds: 192152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 781452.0289814435,
            "unit": "iter/sec",
            "range": "stddev: 2.4367659239373045e-7",
            "extra": "mean: 1.27966908129142 usec\nrounds: 126383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 815951.1438085347,
            "unit": "iter/sec",
            "range": "stddev: 1.1287182965909568e-7",
            "extra": "mean: 1.2255635739811561 usec\nrounds: 190651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 817677.6784645396,
            "unit": "iter/sec",
            "range": "stddev: 1.1014538885446008e-7",
            "extra": "mean: 1.2229757841474052 usec\nrounds: 184366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 784267.7295324951,
            "unit": "iter/sec",
            "range": "stddev: 2.0193954580139236e-7",
            "extra": "mean: 1.2750747765639978 usec\nrounds: 18543"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 815561.2996345819,
            "unit": "iter/sec",
            "range": "stddev: 1.0651724451139462e-7",
            "extra": "mean: 1.2261494021946078 usec\nrounds: 193120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 817081.2731053574,
            "unit": "iter/sec",
            "range": "stddev: 1.0693195566285996e-7",
            "extra": "mean: 1.2238684607217236 usec\nrounds: 192083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 819212.6094135306,
            "unit": "iter/sec",
            "range": "stddev: 1.128445686095569e-7",
            "extra": "mean: 1.2206843357988522 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 773161.2827530438,
            "unit": "iter/sec",
            "range": "stddev: 4.041409848940881e-7",
            "extra": "mean: 1.2933912009137827 usec\nrounds: 197452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 729756.0158367046,
            "unit": "iter/sec",
            "range": "stddev: 9.106493328656323e-7",
            "extra": "mean: 1.3703210090751305 usec\nrounds: 26864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 768933.9371711418,
            "unit": "iter/sec",
            "range": "stddev: 3.2246579981371926e-7",
            "extra": "mean: 1.3005018398315664 usec\nrounds: 173296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 793673.2673499798,
            "unit": "iter/sec",
            "range": "stddev: 1.2107529669652293e-7",
            "extra": "mean: 1.2599643217654677 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 799210.8488544085,
            "unit": "iter/sec",
            "range": "stddev: 1.269310816896189e-7",
            "extra": "mean: 1.2512342661932123 usec\nrounds: 185898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 766694.4564201916,
            "unit": "iter/sec",
            "range": "stddev: 2.4962411874571287e-7",
            "extra": "mean: 1.30430054844683 usec\nrounds: 197743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 770053.3447109074,
            "unit": "iter/sec",
            "range": "stddev: 1.7282683947149498e-7",
            "extra": "mean: 1.2986113324076514 usec\nrounds: 27806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 800588.6836921016,
            "unit": "iter/sec",
            "range": "stddev: 1.3862323081654198e-7",
            "extra": "mean: 1.2490808580859107 usec\nrounds: 180643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 804876.0707653274,
            "unit": "iter/sec",
            "range": "stddev: 1.069199124321152e-7",
            "extra": "mean: 1.2424272957315483 usec\nrounds: 183735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 800815.3773358628,
            "unit": "iter/sec",
            "range": "stddev: 1.4537235536971318e-7",
            "extra": "mean: 1.2487272701066015 usec\nrounds: 181991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 803029.0933275246,
            "unit": "iter/sec",
            "range": "stddev: 1.4208916758123106e-7",
            "extra": "mean: 1.2452848947928947 usec\nrounds: 190178"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 735229.9261637317,
            "unit": "iter/sec",
            "range": "stddev: 2.109976424624839e-7",
            "extra": "mean: 1.3601187389335203 usec\nrounds: 24622"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 731593.091116914,
            "unit": "iter/sec",
            "range": "stddev: 2.882091178076979e-7",
            "extra": "mean: 1.36688004868022 usec\nrounds: 191398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 753610.3287606102,
            "unit": "iter/sec",
            "range": "stddev: 1.1620456143310753e-7",
            "extra": "mean: 1.326945719606316 usec\nrounds: 173970"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 712605.8938490294,
            "unit": "iter/sec",
            "range": "stddev: 3.1432107382546807e-7",
            "extra": "mean: 1.4033002093185845 usec\nrounds: 196513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 717689.5952493352,
            "unit": "iter/sec",
            "range": "stddev: 2.627432962262989e-7",
            "extra": "mean: 1.393360035619001 usec\nrounds: 177831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66949.35209670897,
            "unit": "iter/sec",
            "range": "stddev: 0.000007552582927247596",
            "extra": "mean: 14.936664339267846 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59029.688195665265,
            "unit": "iter/sec",
            "range": "stddev: 8.494009133647602e-7",
            "extra": "mean: 16.940628191788978 usec\nrounds: 23542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "373ed5175cea87951aa6b8f0922284357828bb99",
          "message": "Don’t pin an exact version of responses for testing (#3642)\n\n* Don’t pin an exact version of responses for testing\r\n\r\nIn the test dependencies for opentelemetry-exporter-otlp-proto-http,\r\nallow `responses >= 0.22.0` rather than `responses == 0.22.0`.\r\n\r\nThese tests use responses in a very straightforward way, and it’s\r\nunlikely that they will be affected by any future breaking changes;\r\nmeanwhile, allowing newer versions helps with compatibility with newer\r\nPython interpreter versions and makes distribution packagers’ lives\r\neasier.\r\n\r\n* Upper-bound responses test dependency to the current minor release\r\n\r\nAs requested in:\r\n\r\nhttps://github.com/open-telemetry/opentelemetry-python/pull/3642#issuecomment-1904877072\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-01-25T14:00:06-06:00",
          "tree_id": "58b1e45f7efe446d36b3a82cd2f08d6d2108365e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/373ed5175cea87951aa6b8f0922284357828bb99"
        },
        "date": 1706212926133,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 920662.1647187257,
            "unit": "iter/sec",
            "range": "stddev: 1.2285936696621584e-7",
            "extra": "mean: 1.0861747536953612 usec\nrounds: 33547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874403.4419468739,
            "unit": "iter/sec",
            "range": "stddev: 2.9728018028013057e-7",
            "extra": "mean: 1.1436368523132563 usec\nrounds: 97472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 785042.9293860986,
            "unit": "iter/sec",
            "range": "stddev: 2.2903326049868506e-7",
            "extra": "mean: 1.2738156890120609 usec\nrounds: 109633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 681409.4966055285,
            "unit": "iter/sec",
            "range": "stddev: 2.34861843566335e-7",
            "extra": "mean: 1.4675463212378812 usec\nrounds: 112883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 575722.0700653967,
            "unit": "iter/sec",
            "range": "stddev: 2.3347016722002748e-7",
            "extra": "mean: 1.7369492190674733 usec\nrounds: 108701"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 914030.5063448806,
            "unit": "iter/sec",
            "range": "stddev: 2.1970008145211992e-7",
            "extra": "mean: 1.09405538771228 usec\nrounds: 50582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 865155.7507385486,
            "unit": "iter/sec",
            "range": "stddev: 2.6882384561360053e-7",
            "extra": "mean: 1.1558612413387306 usec\nrounds: 131041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780611.8781976318,
            "unit": "iter/sec",
            "range": "stddev: 2.7122086963265663e-7",
            "extra": "mean: 1.2810463534181893 usec\nrounds: 115457"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 685028.0652140325,
            "unit": "iter/sec",
            "range": "stddev: 2.4407236941134456e-7",
            "extra": "mean: 1.4597942052017336 usec\nrounds: 123447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 577519.743598557,
            "unit": "iter/sec",
            "range": "stddev: 2.4757463004145924e-7",
            "extra": "mean: 1.7315425335399712 usec\nrounds: 117942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 932135.8819972951,
            "unit": "iter/sec",
            "range": "stddev: 1.4924394683340895e-7",
            "extra": "mean: 1.07280496257401 usec\nrounds: 35456"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880681.8319527264,
            "unit": "iter/sec",
            "range": "stddev: 2.1167111778633252e-7",
            "extra": "mean: 1.135483853212585 usec\nrounds: 137836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 791501.483206191,
            "unit": "iter/sec",
            "range": "stddev: 2.0315857309751804e-7",
            "extra": "mean: 1.2634215111628464 usec\nrounds: 126980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 698213.1834372679,
            "unit": "iter/sec",
            "range": "stddev: 2.1888519884983315e-7",
            "extra": "mean: 1.432227325008461 usec\nrounds: 118437"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 581380.6399352791,
            "unit": "iter/sec",
            "range": "stddev: 2.812210928385699e-7",
            "extra": "mean: 1.720043515916393 usec\nrounds: 122518"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 775214.951949507,
            "unit": "iter/sec",
            "range": "stddev: 1.0808078168563542e-7",
            "extra": "mean: 1.2899647994213794 usec\nrounds: 3735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 812933.8491749213,
            "unit": "iter/sec",
            "range": "stddev: 1.0318788966731691e-7",
            "extra": "mean: 1.2301123898518183 usec\nrounds: 170761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 759559.9433021991,
            "unit": "iter/sec",
            "range": "stddev: 2.5986862748046277e-7",
            "extra": "mean: 1.3165517860940426 usec\nrounds: 76326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 766582.5693852792,
            "unit": "iter/sec",
            "range": "stddev: 2.643103006503197e-7",
            "extra": "mean: 1.3044909184432638 usec\nrounds: 174991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 814709.246430353,
            "unit": "iter/sec",
            "range": "stddev: 1.0722756687268551e-7",
            "extra": "mean: 1.2274317548027078 usec\nrounds: 192358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 771180.3677283775,
            "unit": "iter/sec",
            "range": "stddev: 2.1644602791023105e-7",
            "extra": "mean: 1.296713508080663 usec\nrounds: 18687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 814765.7403272269,
            "unit": "iter/sec",
            "range": "stddev: 1.1452484141453702e-7",
            "extra": "mean: 1.2273466476368766 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 815559.7409708193,
            "unit": "iter/sec",
            "range": "stddev: 1.0562758411404218e-7",
            "extra": "mean: 1.2261517455602067 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 770228.416099907,
            "unit": "iter/sec",
            "range": "stddev: 2.1007828056108862e-7",
            "extra": "mean: 1.2983161606313536 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 813362.521306825,
            "unit": "iter/sec",
            "range": "stddev: 1.1043594592963914e-7",
            "extra": "mean: 1.2294640751252044 usec\nrounds: 191262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 753629.326322667,
            "unit": "iter/sec",
            "range": "stddev: 2.2605454932867044e-7",
            "extra": "mean: 1.3269122698283229 usec\nrounds: 30444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 789288.9668138286,
            "unit": "iter/sec",
            "range": "stddev: 1.206527155409295e-7",
            "extra": "mean: 1.2669631048268186 usec\nrounds: 186673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 741411.2963208574,
            "unit": "iter/sec",
            "range": "stddev: 2.445494605801839e-7",
            "extra": "mean: 1.3487790177494603 usec\nrounds: 199507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 747041.1425441288,
            "unit": "iter/sec",
            "range": "stddev: 2.1284963831332126e-7",
            "extra": "mean: 1.338614358767969 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 789476.1121176707,
            "unit": "iter/sec",
            "range": "stddev: 1.1469367799523994e-7",
            "extra": "mean: 1.266662771236517 usec\nrounds: 183358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 748483.7788111992,
            "unit": "iter/sec",
            "range": "stddev: 2.1038674095608587e-7",
            "extra": "mean: 1.3360342980154876 usec\nrounds: 29649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788817.416435889,
            "unit": "iter/sec",
            "range": "stddev: 1.1139627781741104e-7",
            "extra": "mean: 1.2677204878643484 usec\nrounds: 168775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 741836.2944516438,
            "unit": "iter/sec",
            "range": "stddev: 2.755558318646927e-7",
            "extra": "mean: 1.348006302036203 usec\nrounds: 199581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 786877.2578952604,
            "unit": "iter/sec",
            "range": "stddev: 1.1230381612563406e-7",
            "extra": "mean: 1.2708462342332785 usec\nrounds: 186738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 744981.524061593,
            "unit": "iter/sec",
            "range": "stddev: 2.5534679890023254e-7",
            "extra": "mean: 1.3423151684998336 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 712757.722954239,
            "unit": "iter/sec",
            "range": "stddev: 1.7996487885747513e-7",
            "extra": "mean: 1.4030012833185432 usec\nrounds: 25410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 713188.3244726813,
            "unit": "iter/sec",
            "range": "stddev: 2.438307253098157e-7",
            "extra": "mean: 1.4021541936197317 usec\nrounds: 192427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 702136.8131130661,
            "unit": "iter/sec",
            "range": "stddev: 2.509737835682811e-7",
            "extra": "mean: 1.4242238568382377 usec\nrounds: 197743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 701322.1275914286,
            "unit": "iter/sec",
            "range": "stddev: 2.634696779823932e-7",
            "extra": "mean: 1.4258782956618377 usec\nrounds: 198474"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 702331.1901998486,
            "unit": "iter/sec",
            "range": "stddev: 2.422921184725562e-7",
            "extra": "mean: 1.4238296888330553 usec\nrounds: 173970"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70216.72869391947,
            "unit": "iter/sec",
            "range": "stddev: 0.000004523524301427788",
            "extra": "mean: 14.241620459977318 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59041.34800631643,
            "unit": "iter/sec",
            "range": "stddev: 9.778514975920164e-7",
            "extra": "mean: 16.93728266321116 usec\nrounds: 22204"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bac02e97ebe6d1eecab1d8beaf9a93e4671c384",
          "message": "Add test context for no exception raised (#3630)\n\n* Add test context for no exception raised\r\n\r\nFixes #1891\r\n\r\n* Add missing test class",
          "timestamp": "2024-01-25T17:35:10-06:00",
          "tree_id": "b1d51d2ab0b40710ec7b634c4071e95c88c46521",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4bac02e97ebe6d1eecab1d8beaf9a93e4671c384"
        },
        "date": 1706230159589,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 897041.0817114066,
            "unit": "iter/sec",
            "range": "stddev: 1.4382727729840553e-7",
            "extra": "mean: 1.114776146140559 usec\nrounds: 32643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 865932.5316704183,
            "unit": "iter/sec",
            "range": "stddev: 1.3974742830421234e-7",
            "extra": "mean: 1.1548243811454457 usec\nrounds: 101297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 772627.4756469557,
            "unit": "iter/sec",
            "range": "stddev: 1.2778305052911588e-7",
            "extra": "mean: 1.2942848028574898 usec\nrounds: 115780"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 670055.967705338,
            "unit": "iter/sec",
            "range": "stddev: 1.8554665771209855e-7",
            "extra": "mean: 1.4924126464011394 usec\nrounds: 107655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 567869.5450057364,
            "unit": "iter/sec",
            "range": "stddev: 4.169734651830847e-7",
            "extra": "mean: 1.7609678293099842 usec\nrounds: 99109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915080.62457406,
            "unit": "iter/sec",
            "range": "stddev: 9.372886425856025e-8",
            "extra": "mean: 1.0927998835790749 usec\nrounds: 53985"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 871098.3160278744,
            "unit": "iter/sec",
            "range": "stddev: 1.2447017977141767e-7",
            "extra": "mean: 1.147976045413456 usec\nrounds: 141097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 761106.5937122257,
            "unit": "iter/sec",
            "range": "stddev: 1.3605030323116648e-7",
            "extra": "mean: 1.313876411348106 usec\nrounds: 123164"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679216.3786052446,
            "unit": "iter/sec",
            "range": "stddev: 1.621100514792882e-7",
            "extra": "mean: 1.4722848734205694 usec\nrounds: 117581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 567803.5410557715,
            "unit": "iter/sec",
            "range": "stddev: 3.9583288512125896e-7",
            "extra": "mean: 1.7611725318595306 usec\nrounds: 111732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 932612.2675079425,
            "unit": "iter/sec",
            "range": "stddev: 1.2664382808359492e-7",
            "extra": "mean: 1.072256965557751 usec\nrounds: 37628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 884226.4641700723,
            "unit": "iter/sec",
            "range": "stddev: 1.474767187146053e-7",
            "extra": "mean: 1.1309319959548958 usec\nrounds: 135198"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 785513.0264559736,
            "unit": "iter/sec",
            "range": "stddev: 1.461002613758305e-7",
            "extra": "mean: 1.273053362987161 usec\nrounds: 138120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 694683.798555663,
            "unit": "iter/sec",
            "range": "stddev: 2.009759344028942e-7",
            "extra": "mean: 1.4395038463242251 usec\nrounds: 124854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 577400.3572196427,
            "unit": "iter/sec",
            "range": "stddev: 1.94923749312777e-7",
            "extra": "mean: 1.7319005565138588 usec\nrounds: 123989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 792216.7328590555,
            "unit": "iter/sec",
            "range": "stddev: 9.890122087576507e-8",
            "extra": "mean: 1.2622808361937383 usec\nrounds: 3992"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 786934.6233720466,
            "unit": "iter/sec",
            "range": "stddev: 1.531791346289881e-7",
            "extra": "mean: 1.2707535928651348 usec\nrounds: 188575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 788801.5464552358,
            "unit": "iter/sec",
            "range": "stddev: 1.678248853931002e-7",
            "extra": "mean: 1.2677459932651762 usec\nrounds: 166834"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 820893.2363601191,
            "unit": "iter/sec",
            "range": "stddev: 7.356085137730488e-8",
            "extra": "mean: 1.218185210581158 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 790845.5340060779,
            "unit": "iter/sec",
            "range": "stddev: 1.6511277468325445e-7",
            "extra": "mean: 1.264469427973421 usec\nrounds: 197017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 781009.5181725067,
            "unit": "iter/sec",
            "range": "stddev: 1.6687836762845133e-7",
            "extra": "mean: 1.2803941267449745 usec\nrounds: 18326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 807443.6233113728,
            "unit": "iter/sec",
            "range": "stddev: 1.3148703483469685e-7",
            "extra": "mean: 1.2384765587706823 usec\nrounds: 187586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 780157.3589194553,
            "unit": "iter/sec",
            "range": "stddev: 3.822750650713241e-7",
            "extra": "mean: 1.281792690368305 usec\nrounds: 174422"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 772853.3461305943,
            "unit": "iter/sec",
            "range": "stddev: 4.2144949699961945e-7",
            "extra": "mean: 1.2939065412689865 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 788247.1921313205,
            "unit": "iter/sec",
            "range": "stddev: 1.971231413115384e-7",
            "extra": "mean: 1.268637566974551 usec\nrounds: 137378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 762628.6568354311,
            "unit": "iter/sec",
            "range": "stddev: 2.3740270878831329e-7",
            "extra": "mean: 1.311254161559512 usec\nrounds: 27383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 761547.1071152958,
            "unit": "iter/sec",
            "range": "stddev: 2.3860631094777645e-7",
            "extra": "mean: 1.313116405612717 usec\nrounds: 197017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 764724.4305467218,
            "unit": "iter/sec",
            "range": "stddev: 2.394952938542298e-7",
            "extra": "mean: 1.307660589952741 usec\nrounds: 195155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 803253.3041342797,
            "unit": "iter/sec",
            "range": "stddev: 8.123413546231646e-8",
            "extra": "mean: 1.2449373004170428 usec\nrounds: 183295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 794842.9058573728,
            "unit": "iter/sec",
            "range": "stddev: 7.62654016761407e-8",
            "extra": "mean: 1.2581102411945546 usec\nrounds: 174820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 752563.644943824,
            "unit": "iter/sec",
            "range": "stddev: 1.2793804232146095e-7",
            "extra": "mean: 1.328791267979263 usec\nrounds: 27947"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 767209.9708158594,
            "unit": "iter/sec",
            "range": "stddev: 1.7221904351390562e-7",
            "extra": "mean: 1.3034241446791799 usec\nrounds: 196082"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 800416.7947045846,
            "unit": "iter/sec",
            "range": "stddev: 8.747493637490617e-8",
            "extra": "mean: 1.2493490973900379 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 802611.1493117042,
            "unit": "iter/sec",
            "range": "stddev: 8.064818761824782e-8",
            "extra": "mean: 1.2459333524803022 usec\nrounds: 181192"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 802158.9663961477,
            "unit": "iter/sec",
            "range": "stddev: 7.960002161045023e-8",
            "extra": "mean: 1.2466356942847512 usec\nrounds: 189106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 735618.880360939,
            "unit": "iter/sec",
            "range": "stddev: 1.688657206245244e-7",
            "extra": "mean: 1.3593995840744868 usec\nrounds: 26441"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 733269.8515627518,
            "unit": "iter/sec",
            "range": "stddev: 1.4495177858212075e-7",
            "extra": "mean: 1.363754418470622 usec\nrounds: 187783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 725006.1138562869,
            "unit": "iter/sec",
            "range": "stddev: 1.7582000019375576e-7",
            "extra": "mean: 1.3792987133322623 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 723947.1521762613,
            "unit": "iter/sec",
            "range": "stddev: 1.8112052008371452e-7",
            "extra": "mean: 1.3813162977351245 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 713067.2129075461,
            "unit": "iter/sec",
            "range": "stddev: 1.995319368542897e-7",
            "extra": "mean: 1.4023923438051227 usec\nrounds: 117787"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72460.87606384415,
            "unit": "iter/sec",
            "range": "stddev: 0.000004035552900519375",
            "extra": "mean: 13.800550784383502 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58519.469274203264,
            "unit": "iter/sec",
            "range": "stddev: 8.056019702376813e-7",
            "extra": "mean: 17.088329959287982 usec\nrounds: 18637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bac02e97ebe6d1eecab1d8beaf9a93e4671c384",
          "message": "Add test context for no exception raised (#3630)\n\n* Add test context for no exception raised\r\n\r\nFixes #1891\r\n\r\n* Add missing test class",
          "timestamp": "2024-01-25T17:35:10-06:00",
          "tree_id": "b1d51d2ab0b40710ec7b634c4071e95c88c46521",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4bac02e97ebe6d1eecab1d8beaf9a93e4671c384"
        },
        "date": 1706230209563,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 902978.3796679953,
            "unit": "iter/sec",
            "range": "stddev: 2.50054280724211e-7",
            "extra": "mean: 1.1074462274143013 usec\nrounds: 30153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 845863.7695033945,
            "unit": "iter/sec",
            "range": "stddev: 2.5354621189786605e-7",
            "extra": "mean: 1.1822234691374696 usec\nrounds: 87496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 764214.0682641355,
            "unit": "iter/sec",
            "range": "stddev: 2.1961780076753683e-7",
            "extra": "mean: 1.3085338801357551 usec\nrounds: 106840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 673250.8582270737,
            "unit": "iter/sec",
            "range": "stddev: 2.145528869755971e-7",
            "extra": "mean: 1.4853304496831707 usec\nrounds: 109992"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 557771.1776127421,
            "unit": "iter/sec",
            "range": "stddev: 2.199485005865484e-7",
            "extra": "mean: 1.7928498999894458 usec\nrounds: 111547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915413.9351302923,
            "unit": "iter/sec",
            "range": "stddev: 1.9221611614239273e-7",
            "extra": "mean: 1.0924019851824394 usec\nrounds: 52246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 868745.2012978948,
            "unit": "iter/sec",
            "range": "stddev: 2.4058470310280917e-7",
            "extra": "mean: 1.1510854949253384 usec\nrounds: 132202"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 770179.2207495398,
            "unit": "iter/sec",
            "range": "stddev: 1.9095697298611167e-7",
            "extra": "mean: 1.2983990908334273 usec\nrounds: 111108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 683893.0583230638,
            "unit": "iter/sec",
            "range": "stddev: 2.247382966398445e-7",
            "extra": "mean: 1.4622169180252311 usec\nrounds: 113528"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564383.1419932101,
            "unit": "iter/sec",
            "range": "stddev: 2.2906748853375566e-7",
            "extra": "mean: 1.7718459776603863 usec\nrounds: 102009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 918238.4629538656,
            "unit": "iter/sec",
            "range": "stddev: 1.615603218309122e-7",
            "extra": "mean: 1.0890417253739482 usec\nrounds: 36285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 872349.8580962319,
            "unit": "iter/sec",
            "range": "stddev: 1.7807638955747854e-7",
            "extra": "mean: 1.1463290682276772 usec\nrounds: 129180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779247.6737648365,
            "unit": "iter/sec",
            "range": "stddev: 1.9886888473973564e-7",
            "extra": "mean: 1.283289041042146 usec\nrounds: 123193"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 693780.798231425,
            "unit": "iter/sec",
            "range": "stddev: 1.8776156343774828e-7",
            "extra": "mean: 1.441377453151174 usec\nrounds: 121685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 568412.0470143822,
            "unit": "iter/sec",
            "range": "stddev: 2.663234059758413e-7",
            "extra": "mean: 1.7592871320243104 usec\nrounds: 123277"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784764.369789735,
            "unit": "iter/sec",
            "range": "stddev: 1.1397217407300067e-7",
            "extra": "mean: 1.2742678420376474 usec\nrounds: 3622"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 772402.7517096002,
            "unit": "iter/sec",
            "range": "stddev: 2.2547512916372852e-7",
            "extra": "mean: 1.294661363889042 usec\nrounds: 190043"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 771247.7100268974,
            "unit": "iter/sec",
            "range": "stddev: 2.2262239865419738e-7",
            "extra": "mean: 1.2966002841877156 usec\nrounds: 142180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 777665.8587128565,
            "unit": "iter/sec",
            "range": "stddev: 1.7432074602732205e-7",
            "extra": "mean: 1.2858993214066732 usec\nrounds: 56371"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 782459.1395829606,
            "unit": "iter/sec",
            "range": "stddev: 1.8695636842150102e-7",
            "extra": "mean: 1.2780220070443364 usec\nrounds: 56406"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 772480.3849537524,
            "unit": "iter/sec",
            "range": "stddev: 2.2409913880650398e-7",
            "extra": "mean: 1.2945312521558316 usec\nrounds: 15682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 817204.8899969162,
            "unit": "iter/sec",
            "range": "stddev: 1.0844235074324027e-7",
            "extra": "mean: 1.223683328673882 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 819323.393050234,
            "unit": "iter/sec",
            "range": "stddev: 1.0687628258695372e-7",
            "extra": "mean: 1.2205192827183058 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 782828.2979376877,
            "unit": "iter/sec",
            "range": "stddev: 2.6779605262046987e-7",
            "extra": "mean: 1.27741933018318 usec\nrounds: 54672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 812789.4574555523,
            "unit": "iter/sec",
            "range": "stddev: 1.0377103412204772e-7",
            "extra": "mean: 1.2303309188218468 usec\nrounds: 191535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 769384.2457863764,
            "unit": "iter/sec",
            "range": "stddev: 2.4966428308206696e-7",
            "extra": "mean: 1.2997406763611523 usec\nrounds: 21740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 793358.817983886,
            "unit": "iter/sec",
            "range": "stddev: 1.1900327998615161e-7",
            "extra": "mean: 1.2604637111631765 usec\nrounds: 175678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 796224.5853181107,
            "unit": "iter/sec",
            "range": "stddev: 1.1449397603038993e-7",
            "extra": "mean: 1.2559270568120882 usec\nrounds: 184683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 793866.5373229685,
            "unit": "iter/sec",
            "range": "stddev: 9.978726774551265e-8",
            "extra": "mean: 1.259657578428917 usec\nrounds: 187652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 765037.7048644647,
            "unit": "iter/sec",
            "range": "stddev: 2.160340486287553e-7",
            "extra": "mean: 1.3071251176792151 usec\nrounds: 185705"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 774918.5697710335,
            "unit": "iter/sec",
            "range": "stddev: 2.292570006521814e-7",
            "extra": "mean: 1.2904581707152425 usec\nrounds: 29762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 796519.2870815443,
            "unit": "iter/sec",
            "range": "stddev: 1.2794831412443507e-7",
            "extra": "mean: 1.2554623801565574 usec\nrounds: 181498"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 766712.199484176,
            "unit": "iter/sec",
            "range": "stddev: 2.550771981237692e-7",
            "extra": "mean: 1.3042703646463092 usec\nrounds: 196010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 797012.1760302287,
            "unit": "iter/sec",
            "range": "stddev: 1.000383514985835e-7",
            "extra": "mean: 1.2546859760421933 usec\nrounds: 183108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 794086.6025234425,
            "unit": "iter/sec",
            "range": "stddev: 1.0754945074900979e-7",
            "extra": "mean: 1.2593084895554307 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 731557.8014965899,
            "unit": "iter/sec",
            "range": "stddev: 3.306527578042888e-7",
            "extra": "mean: 1.3669459856134982 usec\nrounds: 24110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 738198.7492591845,
            "unit": "iter/sec",
            "range": "stddev: 2.3625659843544843e-7",
            "extra": "mean: 1.3546487324769174 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 748011.2399125244,
            "unit": "iter/sec",
            "range": "stddev: 1.134749430158259e-7",
            "extra": "mean: 1.336878306958254 usec\nrounds: 170761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 721010.0245513606,
            "unit": "iter/sec",
            "range": "stddev: 1.7861779299238526e-7",
            "extra": "mean: 1.3869432683994058 usec\nrounds: 55531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 723184.5850813824,
            "unit": "iter/sec",
            "range": "stddev: 2.537564419629051e-7",
            "extra": "mean: 1.3827728364639669 usec\nrounds: 188244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 74200.4797204631,
            "unit": "iter/sec",
            "range": "stddev: 0.000003858584589798154",
            "extra": "mean: 13.477001816798479 usec\nrounds: 39"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58263.37392533789,
            "unit": "iter/sec",
            "range": "stddev: 9.951638929065257e-7",
            "extra": "mean: 17.16344132904934 usec\nrounds: 17567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gshivakumar@gmail.com",
            "name": "gshiva",
            "username": "gshiva"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4d17e9f14f3cafb6757b96eefabdc7ed4891306",
          "message": "Handle HTTP 2XX responses as successful in OTLP exporters (#3623)\n\n* Handle HTTP 2XX responses as successful in OTLP exporters\r\n\r\n* Add test cases for 2XX HTTP responses\r\n\r\n* Add CHANGELOG entry\r\n\r\n* Fix lint",
          "timestamp": "2024-01-25T18:27:50-06:00",
          "tree_id": "aceac2e21ff03db662b6a0471f07be78e954cc49",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c4d17e9f14f3cafb6757b96eefabdc7ed4891306"
        },
        "date": 1706230721992,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 929573.6438973498,
            "unit": "iter/sec",
            "range": "stddev: 2.278603731900507e-7",
            "extra": "mean: 1.0757619975189694 usec\nrounds: 32907"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 878474.8215660342,
            "unit": "iter/sec",
            "range": "stddev: 2.0645053622291417e-7",
            "extra": "mean: 1.1383365526826665 usec\nrounds: 98617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 786134.477800997,
            "unit": "iter/sec",
            "range": "stddev: 1.8993484999797172e-7",
            "extra": "mean: 1.2720469948058188 usec\nrounds: 112552"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 687872.1754427593,
            "unit": "iter/sec",
            "range": "stddev: 2.2515255736830405e-7",
            "extra": "mean: 1.4537584680705176 usec\nrounds: 117684"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570117.2247018729,
            "unit": "iter/sec",
            "range": "stddev: 2.1792747685699553e-7",
            "extra": "mean: 1.7540252366921951 usec\nrounds: 110083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 920954.972494414,
            "unit": "iter/sec",
            "range": "stddev: 1.8082069963355004e-7",
            "extra": "mean: 1.0858294160587374 usec\nrounds: 53304"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 882921.5868015365,
            "unit": "iter/sec",
            "range": "stddev: 2.295721160608509e-7",
            "extra": "mean: 1.1326034100294122 usec\nrounds: 126145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782834.7626147853,
            "unit": "iter/sec",
            "range": "stddev: 1.9519854711925093e-7",
            "extra": "mean: 1.2774087812092685 usec\nrounds: 125174"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679695.8292161092,
            "unit": "iter/sec",
            "range": "stddev: 2.5119293965938824e-7",
            "extra": "mean: 1.4712463384589198 usec\nrounds: 126741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570796.7467681663,
            "unit": "iter/sec",
            "range": "stddev: 4.122655341033839e-7",
            "extra": "mean: 1.7519371048660832 usec\nrounds: 109745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 923133.2381342592,
            "unit": "iter/sec",
            "range": "stddev: 1.5618561657520576e-7",
            "extra": "mean: 1.0832672453882126 usec\nrounds: 33586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 877664.5537401027,
            "unit": "iter/sec",
            "range": "stddev: 2.0632895398962531e-7",
            "extra": "mean: 1.1393874752473183 usec\nrounds: 123818"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 783028.6695977283,
            "unit": "iter/sec",
            "range": "stddev: 2.2992340075171986e-7",
            "extra": "mean: 1.27709244734773 usec\nrounds: 133750"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 695057.3889343812,
            "unit": "iter/sec",
            "range": "stddev: 2.5065014332796245e-7",
            "extra": "mean: 1.438730119153381 usec\nrounds: 117349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 577014.510870328,
            "unit": "iter/sec",
            "range": "stddev: 2.8122593445935704e-7",
            "extra": "mean: 1.733058668648853 usec\nrounds: 125997"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784877.9944732587,
            "unit": "iter/sec",
            "range": "stddev: 3.735429435405677e-7",
            "extra": "mean: 1.2740833696976208 usec\nrounds: 3825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 811631.1644972336,
            "unit": "iter/sec",
            "range": "stddev: 1.2245924254564335e-7",
            "extra": "mean: 1.2320867454854962 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 786332.8379297707,
            "unit": "iter/sec",
            "range": "stddev: 1.9182522384837616e-7",
            "extra": "mean: 1.271726108542999 usec\nrounds: 159215"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 818365.03865229,
            "unit": "iter/sec",
            "range": "stddev: 9.546951815336874e-8",
            "extra": "mean: 1.2219485837846058 usec\nrounds: 190380"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 812820.2389009179,
            "unit": "iter/sec",
            "range": "stddev: 1.0982072264804556e-7",
            "extra": "mean: 1.2302843262763528 usec\nrounds: 181929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 788445.8683435038,
            "unit": "iter/sec",
            "range": "stddev: 2.0554530829560689e-7",
            "extra": "mean: 1.2683178898520502 usec\nrounds: 18684"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 820508.47274829,
            "unit": "iter/sec",
            "range": "stddev: 9.172984930637302e-8",
            "extra": "mean: 1.2187564579930588 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 818702.8518902126,
            "unit": "iter/sec",
            "range": "stddev: 9.284589800018329e-8",
            "extra": "mean: 1.2214443832597022 usec\nrounds: 191740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 825412.1967039892,
            "unit": "iter/sec",
            "range": "stddev: 9.731427414308287e-8",
            "extra": "mean: 1.2115158995628723 usec\nrounds: 192014"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 821362.7318082423,
            "unit": "iter/sec",
            "range": "stddev: 1.0590026704806329e-7",
            "extra": "mean: 1.2174888892249653 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 769500.7012564833,
            "unit": "iter/sec",
            "range": "stddev: 3.912385306405825e-7",
            "extra": "mean: 1.2995439749010556 usec\nrounds: 31026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 794466.5829348768,
            "unit": "iter/sec",
            "range": "stddev: 1.0867471442399378e-7",
            "extra": "mean: 1.2587061828401296 usec\nrounds: 181744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 786479.5479885843,
            "unit": "iter/sec",
            "range": "stddev: 1.8525117379500065e-7",
            "extra": "mean: 1.271488880489636 usec\nrounds: 183923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 759784.8889681747,
            "unit": "iter/sec",
            "range": "stddev: 2.2900339916856773e-7",
            "extra": "mean: 1.3161620012712405 usec\nrounds: 160788"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 794859.8382511338,
            "unit": "iter/sec",
            "range": "stddev: 1.0687274972014698e-7",
            "extra": "mean: 1.2580834404719954 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 775785.5069225213,
            "unit": "iter/sec",
            "range": "stddev: 2.090341680334859e-7",
            "extra": "mean: 1.2890160889534013 usec\nrounds: 27296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 800340.9584992563,
            "unit": "iter/sec",
            "range": "stddev: 1.105234481496687e-7",
            "extra": "mean: 1.2494674793042337 usec\nrounds: 187259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 800535.5890042011,
            "unit": "iter/sec",
            "range": "stddev: 1.0931125319000764e-7",
            "extra": "mean: 1.2491637020709045 usec\nrounds: 186349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 801091.1443376367,
            "unit": "iter/sec",
            "range": "stddev: 1.1286932357317062e-7",
            "extra": "mean: 1.2482974091878478 usec\nrounds: 187783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 791638.5715963828,
            "unit": "iter/sec",
            "range": "stddev: 1.1595347510918969e-7",
            "extra": "mean: 1.2632027239191301 usec\nrounds: 188442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 715121.0554455599,
            "unit": "iter/sec",
            "range": "stddev: 2.2412012609033813e-7",
            "extra": "mean: 1.3983646438391397 usec\nrounds: 25752"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 734816.397334528,
            "unit": "iter/sec",
            "range": "stddev: 1.497636708845251e-7",
            "extra": "mean: 1.3608841659323314 usec\nrounds: 59153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 742891.3160220549,
            "unit": "iter/sec",
            "range": "stddev: 1.1123623785554734e-7",
            "extra": "mean: 1.346091922779068 usec\nrounds: 171964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 741067.5871727586,
            "unit": "iter/sec",
            "range": "stddev: 1.2489585850801873e-7",
            "extra": "mean: 1.3494045851001155 usec\nrounds: 172019"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 701030.8004369583,
            "unit": "iter/sec",
            "range": "stddev: 2.808984376494491e-7",
            "extra": "mean: 1.4264708474673176 usec\nrounds: 182486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67285.97028607441,
            "unit": "iter/sec",
            "range": "stddev: 0.000005316296813857534",
            "extra": "mean: 14.861939208848135 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58770.87774937444,
            "unit": "iter/sec",
            "range": "stddev: 9.327675777496772e-7",
            "extra": "mean: 17.015229962439076 usec\nrounds: 18473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gshivakumar@gmail.com",
            "name": "gshiva",
            "username": "gshiva"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4d17e9f14f3cafb6757b96eefabdc7ed4891306",
          "message": "Handle HTTP 2XX responses as successful in OTLP exporters (#3623)\n\n* Handle HTTP 2XX responses as successful in OTLP exporters\r\n\r\n* Add test cases for 2XX HTTP responses\r\n\r\n* Add CHANGELOG entry\r\n\r\n* Fix lint",
          "timestamp": "2024-01-25T18:27:50-06:00",
          "tree_id": "aceac2e21ff03db662b6a0471f07be78e954cc49",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c4d17e9f14f3cafb6757b96eefabdc7ed4891306"
        },
        "date": 1706230778315,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 928118.7525122912,
            "unit": "iter/sec",
            "range": "stddev: 1.7192035590401644e-7",
            "extra": "mean: 1.0774483300689013 usec\nrounds: 31531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874996.0199048362,
            "unit": "iter/sec",
            "range": "stddev: 2.0336752959613261e-7",
            "extra": "mean: 1.142862341372432 usec\nrounds: 87868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 785373.9150726033,
            "unit": "iter/sec",
            "range": "stddev: 2.2483679529107661e-7",
            "extra": "mean: 1.2732788558524455 usec\nrounds: 125879"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 683604.621785568,
            "unit": "iter/sec",
            "range": "stddev: 2.101031840437345e-7",
            "extra": "mean: 1.4628338781385222 usec\nrounds: 120510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570238.4471471027,
            "unit": "iter/sec",
            "range": "stddev: 3.33011518516316e-7",
            "extra": "mean: 1.7536523624511642 usec\nrounds: 117787"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 923084.4520908929,
            "unit": "iter/sec",
            "range": "stddev: 1.671953332659174e-7",
            "extra": "mean: 1.0833244972709535 usec\nrounds: 49715"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870046.890751172,
            "unit": "iter/sec",
            "range": "stddev: 2.4505175934945717e-7",
            "extra": "mean: 1.149363339643258 usec\nrounds: 135745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780593.5952782102,
            "unit": "iter/sec",
            "range": "stddev: 2.8415658547520245e-7",
            "extra": "mean: 1.2810763578499405 usec\nrounds: 138727"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 678047.7335038703,
            "unit": "iter/sec",
            "range": "stddev: 2.3460799600656733e-7",
            "extra": "mean: 1.4748224211773608 usec\nrounds: 124133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568202.8557455458,
            "unit": "iter/sec",
            "range": "stddev: 3.0116152935221564e-7",
            "extra": "mean: 1.75993483645535 usec\nrounds: 118020"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 931817.4352421875,
            "unit": "iter/sec",
            "range": "stddev: 2.2729619698246308e-7",
            "extra": "mean: 1.0731715915361588 usec\nrounds: 34493"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883763.9980379088,
            "unit": "iter/sec",
            "range": "stddev: 2.3463123608044384e-7",
            "extra": "mean: 1.131523802983775 usec\nrounds: 137343"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 786807.5052898313,
            "unit": "iter/sec",
            "range": "stddev: 2.185291848358128e-7",
            "extra": "mean: 1.2709588981762907 usec\nrounds: 127101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684920.0672372674,
            "unit": "iter/sec",
            "range": "stddev: 2.604451049400227e-7",
            "extra": "mean: 1.4600243850843164 usec\nrounds: 132922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 575711.9781296415,
            "unit": "iter/sec",
            "range": "stddev: 2.966913161465438e-7",
            "extra": "mean: 1.7369796668965873 usec\nrounds: 125820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 788075.3087621547,
            "unit": "iter/sec",
            "range": "stddev: 1.6204451571759848e-7",
            "extra": "mean: 1.2689142634994106 usec\nrounds: 3800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 824002.1237701192,
            "unit": "iter/sec",
            "range": "stddev: 1.0507687772164878e-7",
            "extra": "mean: 1.2135891051161671 usec\nrounds: 190718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 784206.1501080996,
            "unit": "iter/sec",
            "range": "stddev: 2.2055608293621108e-7",
            "extra": "mean: 1.275174901219729 usec\nrounds: 148185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 824085.086804655,
            "unit": "iter/sec",
            "range": "stddev: 1.0933179568921687e-7",
            "extra": "mean: 1.2134669295830185 usec\nrounds: 190651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 822725.936843914,
            "unit": "iter/sec",
            "range": "stddev: 1.1823310757594626e-7",
            "extra": "mean: 1.2154715868520358 usec\nrounds: 193677"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 787021.8934370962,
            "unit": "iter/sec",
            "range": "stddev: 2.120343859289818e-7",
            "extra": "mean: 1.2706126835084373 usec\nrounds: 18356"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 825643.5516750695,
            "unit": "iter/sec",
            "range": "stddev: 1.4006104720664085e-7",
            "extra": "mean: 1.211176418650876 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 790044.4102520872,
            "unit": "iter/sec",
            "range": "stddev: 2.408742386726077e-7",
            "extra": "mean: 1.2657516299380185 usec\nrounds: 199284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 830924.0465488413,
            "unit": "iter/sec",
            "range": "stddev: 1.0590205912117802e-7",
            "extra": "mean: 1.2034794325105869 usec\nrounds: 194378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 825926.6223875149,
            "unit": "iter/sec",
            "range": "stddev: 1.4190315305146728e-7",
            "extra": "mean: 1.2107613108647466 usec\nrounds: 194237"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 769931.4126488727,
            "unit": "iter/sec",
            "range": "stddev: 2.3694886027685477e-7",
            "extra": "mean: 1.2988169901518878 usec\nrounds: 28489"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 802275.7287008646,
            "unit": "iter/sec",
            "range": "stddev: 1.3612723981056795e-7",
            "extra": "mean: 1.24645426033181 usec\nrounds: 172906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 805565.1421675929,
            "unit": "iter/sec",
            "range": "stddev: 1.0693319373409428e-7",
            "extra": "mean: 1.2413645373349038 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 800213.5738831742,
            "unit": "iter/sec",
            "range": "stddev: 1.0879889271676963e-7",
            "extra": "mean: 1.2496663798732228 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 804628.4120524719,
            "unit": "iter/sec",
            "range": "stddev: 1.1309444470782785e-7",
            "extra": "mean: 1.2428097057238732 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 767195.7408442124,
            "unit": "iter/sec",
            "range": "stddev: 3.044206985637091e-7",
            "extra": "mean: 1.303448320632767 usec\nrounds: 27472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 803252.4895547513,
            "unit": "iter/sec",
            "range": "stddev: 1.0898712721679245e-7",
            "extra": "mean: 1.244938562909786 usec\nrounds: 182176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 803810.2450926525,
            "unit": "iter/sec",
            "range": "stddev: 1.1006870537251631e-7",
            "extra": "mean: 1.244074713037196 usec\nrounds: 183735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 804002.0501021746,
            "unit": "iter/sec",
            "range": "stddev: 1.0906654912490747e-7",
            "extra": "mean: 1.2437779230449941 usec\nrounds: 182796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 782965.8420640763,
            "unit": "iter/sec",
            "range": "stddev: 1.588613084385844e-7",
            "extra": "mean: 1.277194925086096 usec\nrounds: 175678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 725409.9935290857,
            "unit": "iter/sec",
            "range": "stddev: 3.142407205881288e-7",
            "extra": "mean: 1.3785307742109352 usec\nrounds: 22928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 727455.0154350078,
            "unit": "iter/sec",
            "range": "stddev: 2.955510994598637e-7",
            "extra": "mean: 1.374655447803895 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 721982.1498486637,
            "unit": "iter/sec",
            "range": "stddev: 2.4739063918701565e-7",
            "extra": "mean: 1.3850757947542225 usec\nrounds: 190786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 754882.3854076592,
            "unit": "iter/sec",
            "range": "stddev: 1.0810058867755768e-7",
            "extra": "mean: 1.3247096757463348 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 708718.3818085091,
            "unit": "iter/sec",
            "range": "stddev: 3.092129080009247e-7",
            "extra": "mean: 1.4109976905752013 usec\nrounds: 195368"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70011.14415781487,
            "unit": "iter/sec",
            "range": "stddev: 0.000005002825789359233",
            "extra": "mean: 14.28344032981179 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58260.230023432494,
            "unit": "iter/sec",
            "range": "stddev: 9.142881779144257e-7",
            "extra": "mean: 17.164367521339962 usec\nrounds: 23245"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iurisilvio@gmail.com",
            "name": "Iuri de Silvio",
            "username": "iurisilvio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "763cd6bc7958d99bb129a2436fb23ccf35703c3e",
          "message": "Upgrade markupsafe (#3609)\n\n* Upgrade markupsafe in tox tracecontext\r\n\r\n* Upgrade markupsafe in tox docs, lint and tests\r\n\r\n* Upgrade markupsafe in fork-process-model examples\r\n\r\n* Add changelog\r\n\r\n* Use Flask<3\r\n\r\n---------",
          "timestamp": "2024-01-30T22:09:56-06:00",
          "tree_id": "54b1e46050ce381f4eebef0c73de21d715d62a16",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/763cd6bc7958d99bb129a2436fb23ccf35703c3e"
        },
        "date": 1706674249554,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 901140.5140641734,
            "unit": "iter/sec",
            "range": "stddev: 1.887614688667566e-7",
            "extra": "mean: 1.1097048511224592 usec\nrounds: 33757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 862982.794905621,
            "unit": "iter/sec",
            "range": "stddev: 1.2581175496480406e-7",
            "extra": "mean: 1.1587716532742276 usec\nrounds: 95393"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 777465.0598290844,
            "unit": "iter/sec",
            "range": "stddev: 1.6694601935417913e-7",
            "extra": "mean: 1.2862314355578075 usec\nrounds: 118515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674255.3812499862,
            "unit": "iter/sec",
            "range": "stddev: 4.799878557508966e-7",
            "extra": "mean: 1.4831175661455211 usec\nrounds: 116433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 571312.1540696302,
            "unit": "iter/sec",
            "range": "stddev: 1.5528961693734243e-7",
            "extra": "mean: 1.750356600812176 usec\nrounds: 101450"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 908766.0831152691,
            "unit": "iter/sec",
            "range": "stddev: 1.0761550165961568e-7",
            "extra": "mean: 1.1003931799170796 usec\nrounds: 53575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 873468.5707154351,
            "unit": "iter/sec",
            "range": "stddev: 1.2910165650786993e-7",
            "extra": "mean: 1.1448608839822667 usec\nrounds: 128685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 777598.2032913322,
            "unit": "iter/sec",
            "range": "stddev: 1.584658984950447e-7",
            "extra": "mean: 1.2860112018871828 usec\nrounds: 132659"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 667586.5242049105,
            "unit": "iter/sec",
            "range": "stddev: 4.6834710424670635e-7",
            "extra": "mean: 1.4979331723194846 usec\nrounds: 114034"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 562784.640121413,
            "unit": "iter/sec",
            "range": "stddev: 1.7723593128449656e-7",
            "extra": "mean: 1.7768786294243277 usec\nrounds: 119891"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 921496.2472525439,
            "unit": "iter/sec",
            "range": "stddev: 7.765999142570465e-8",
            "extra": "mean: 1.0851916141617681 usec\nrounds: 36049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 878596.8014204985,
            "unit": "iter/sec",
            "range": "stddev: 1.3556940015175695e-7",
            "extra": "mean: 1.138178511898995 usec\nrounds: 129242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 781052.4280361076,
            "unit": "iter/sec",
            "range": "stddev: 1.3533004007047253e-7",
            "extra": "mean: 1.280323783788008 usec\nrounds: 123818"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684776.9138184787,
            "unit": "iter/sec",
            "range": "stddev: 1.769429384710262e-7",
            "extra": "mean: 1.4603296048982763 usec\nrounds: 124075"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 573895.4859316576,
            "unit": "iter/sec",
            "range": "stddev: 4.737903437719314e-7",
            "extra": "mean: 1.7424775495081786 usec\nrounds: 118988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784315.753791605,
            "unit": "iter/sec",
            "range": "stddev: 1.2896829399912968e-7",
            "extra": "mean: 1.2749967027510491 usec\nrounds: 3934"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 788875.2189709694,
            "unit": "iter/sec",
            "range": "stddev: 1.5086150135262623e-7",
            "extra": "mean: 1.2676275993362138 usec\nrounds: 193537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 785340.7834543367,
            "unit": "iter/sec",
            "range": "stddev: 1.757252960400278e-7",
            "extra": "mean: 1.2733325723916702 usec\nrounds: 149007"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 812832.260318966,
            "unit": "iter/sec",
            "range": "stddev: 1.1357286248469042e-7",
            "extra": "mean: 1.2302661309328287 usec\nrounds: 191262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 783524.5250046105,
            "unit": "iter/sec",
            "range": "stddev: 1.7620996456437865e-7",
            "extra": "mean: 1.2762842362772444 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 750741.451274633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011164127053883719",
            "extra": "mean: 1.332016499558094 usec\nrounds: 18534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 810313.1516424225,
            "unit": "iter/sec",
            "range": "stddev: 7.379878274348997e-8",
            "extra": "mean: 1.2340907931373217 usec\nrounds: 185128"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 791371.2953497908,
            "unit": "iter/sec",
            "range": "stddev: 1.3789659765816927e-7",
            "extra": "mean: 1.2636293556212372 usec\nrounds: 190313"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 771413.5641259567,
            "unit": "iter/sec",
            "range": "stddev: 1.9028152381148266e-7",
            "extra": "mean: 1.2963215148194096 usec\nrounds: 142482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 773788.9651056118,
            "unit": "iter/sec",
            "range": "stddev: 1.677343295615669e-7",
            "extra": "mean: 1.2923420274719393 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 761808.2572787034,
            "unit": "iter/sec",
            "range": "stddev: 1.5828850726270354e-7",
            "extra": "mean: 1.3126662653567898 usec\nrounds: 30385"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 767040.5515464888,
            "unit": "iter/sec",
            "range": "stddev: 1.7534089831883226e-7",
            "extra": "mean: 1.303712037106544 usec\nrounds: 193328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 800465.8797931732,
            "unit": "iter/sec",
            "range": "stddev: 1.1334592833053963e-7",
            "extra": "mean: 1.249272486490471 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 793926.2040978597,
            "unit": "iter/sec",
            "range": "stddev: 1.1317420890890635e-7",
            "extra": "mean: 1.2595629100519519 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 792344.8921228037,
            "unit": "iter/sec",
            "range": "stddev: 1.6514573351220246e-7",
            "extra": "mean: 1.2620766662871505 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 773327.4554116051,
            "unit": "iter/sec",
            "range": "stddev: 1.5170326615009872e-7",
            "extra": "mean: 1.293113276920639 usec\nrounds: 25653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 795920.2798133608,
            "unit": "iter/sec",
            "range": "stddev: 1.1902670781351059e-7",
            "extra": "mean: 1.2564072374616397 usec\nrounds: 184302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 766841.5626207922,
            "unit": "iter/sec",
            "range": "stddev: 3.6808472967863163e-7",
            "extra": "mean: 1.3040503393978216 usec\nrounds: 192427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 800268.4384070699,
            "unit": "iter/sec",
            "range": "stddev: 1.066299259465779e-7",
            "extra": "mean: 1.2495807056823267 usec\nrounds: 186155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 797156.211188194,
            "unit": "iter/sec",
            "range": "stddev: 1.0885092013155994e-7",
            "extra": "mean: 1.254459271551631 usec\nrounds: 184176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 733257.0644973081,
            "unit": "iter/sec",
            "range": "stddev: 1.5900754547215073e-7",
            "extra": "mean: 1.3637782006035772 usec\nrounds: 25352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 728659.1287367609,
            "unit": "iter/sec",
            "range": "stddev: 1.4775205880117277e-7",
            "extra": "mean: 1.3723838219575302 usec\nrounds: 193957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 721846.1401187419,
            "unit": "iter/sec",
            "range": "stddev: 1.711977447758079e-7",
            "extra": "mean: 1.385336769738081 usec\nrounds: 199581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 715959.099762272,
            "unit": "iter/sec",
            "range": "stddev: 5.861454353238107e-7",
            "extra": "mean: 1.3967278303076829 usec\nrounds: 76861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 720771.8213394544,
            "unit": "iter/sec",
            "range": "stddev: 1.722203812045206e-7",
            "extra": "mean: 1.3874016302990853 usec\nrounds: 193607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70898.65005489883,
            "unit": "iter/sec",
            "range": "stddev: 0.000004070949236125106",
            "extra": "mean: 14.104640909603663 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57769.678820581576,
            "unit": "iter/sec",
            "range": "stddev: 8.487513132039226e-7",
            "extra": "mean: 17.310118740762853 usec\nrounds: 18828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iurisilvio@gmail.com",
            "name": "Iuri de Silvio",
            "username": "iurisilvio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "763cd6bc7958d99bb129a2436fb23ccf35703c3e",
          "message": "Upgrade markupsafe (#3609)\n\n* Upgrade markupsafe in tox tracecontext\r\n\r\n* Upgrade markupsafe in tox docs, lint and tests\r\n\r\n* Upgrade markupsafe in fork-process-model examples\r\n\r\n* Add changelog\r\n\r\n* Use Flask<3\r\n\r\n---------",
          "timestamp": "2024-01-30T22:09:56-06:00",
          "tree_id": "54b1e46050ce381f4eebef0c73de21d715d62a16",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/763cd6bc7958d99bb129a2436fb23ccf35703c3e"
        },
        "date": 1706674536031,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 901811.1782293583,
            "unit": "iter/sec",
            "range": "stddev: 1.7468199559694839e-7",
            "extra": "mean: 1.1088795793853747 usec\nrounds: 31400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 865731.0712250537,
            "unit": "iter/sec",
            "range": "stddev: 1.6941460788365719e-7",
            "extra": "mean: 1.15509311521527 usec\nrounds: 94603"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 773384.3278455783,
            "unit": "iter/sec",
            "range": "stddev: 1.6918935363701124e-7",
            "extra": "mean: 1.2930181851314553 usec\nrounds: 114815"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682273.4271633105,
            "unit": "iter/sec",
            "range": "stddev: 1.3396597625215047e-7",
            "extra": "mean: 1.465688036770979 usec\nrounds: 113696"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 566655.3190734619,
            "unit": "iter/sec",
            "range": "stddev: 1.7094237694451332e-7",
            "extra": "mean: 1.7647412215861664 usec\nrounds: 102184"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 901581.181386186,
            "unit": "iter/sec",
            "range": "stddev: 1.5848203350605419e-7",
            "extra": "mean: 1.1091624588508984 usec\nrounds: 54274"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 867050.1606518552,
            "unit": "iter/sec",
            "range": "stddev: 1.786875367700726e-7",
            "extra": "mean: 1.1533358107542382 usec\nrounds: 129962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 773009.2332235537,
            "unit": "iter/sec",
            "range": "stddev: 2.441571977354958e-7",
            "extra": "mean: 1.293645608642815 usec\nrounds: 115061"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 680471.5702877832,
            "unit": "iter/sec",
            "range": "stddev: 2.4194988997381603e-7",
            "extra": "mean: 1.4695691101056327 usec\nrounds: 39657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570845.8587012925,
            "unit": "iter/sec",
            "range": "stddev: 2.0562914819055309e-7",
            "extra": "mean: 1.7517863793827952 usec\nrounds: 106565"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 926150.4367371186,
            "unit": "iter/sec",
            "range": "stddev: 1.489300264962741e-7",
            "extra": "mean: 1.0797381940703474 usec\nrounds: 35897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 881407.7100312284,
            "unit": "iter/sec",
            "range": "stddev: 1.3685143016771947e-7",
            "extra": "mean: 1.134548732237173 usec\nrounds: 137978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 780499.9111777726,
            "unit": "iter/sec",
            "range": "stddev: 2.0151279065165394e-7",
            "extra": "mean: 1.2812301265877177 usec\nrounds: 129836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 678847.5357408677,
            "unit": "iter/sec",
            "range": "stddev: 1.848997864768331e-7",
            "extra": "mean: 1.4730848200084263 usec\nrounds: 127645"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 571090.8047006383,
            "unit": "iter/sec",
            "range": "stddev: 1.6128157594385768e-7",
            "extra": "mean: 1.75103502239752 usec\nrounds: 118830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784723.2987169699,
            "unit": "iter/sec",
            "range": "stddev: 2.3011010839562213e-7",
            "extra": "mean: 1.274334535032934 usec\nrounds: 3944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 816549.1454825827,
            "unit": "iter/sec",
            "range": "stddev: 7.986832505291202e-8",
            "extra": "mean: 1.2246660296349918 usec\nrounds: 190178"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 782171.6710355346,
            "unit": "iter/sec",
            "range": "stddev: 1.8757484047374403e-7",
            "extra": "mean: 1.2784917135596046 usec\nrounds: 152738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 816965.4789698293,
            "unit": "iter/sec",
            "range": "stddev: 7.48876419798324e-8",
            "extra": "mean: 1.2240419280150885 usec\nrounds: 188112"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 813454.0858620149,
            "unit": "iter/sec",
            "range": "stddev: 8.650993844101846e-8",
            "extra": "mean: 1.2293256833792936 usec\nrounds: 188509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 773168.2654081371,
            "unit": "iter/sec",
            "range": "stddev: 1.5190633254183186e-7",
            "extra": "mean: 1.2933795200093008 usec\nrounds: 18206"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 817627.1137856941,
            "unit": "iter/sec",
            "range": "stddev: 7.980326958471617e-8",
            "extra": "mean: 1.2230514168859954 usec\nrounds: 189239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 816101.6362140374,
            "unit": "iter/sec",
            "range": "stddev: 8.208512456309846e-8",
            "extra": "mean: 1.2253375751567932 usec\nrounds: 190043"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 783066.8521448609,
            "unit": "iter/sec",
            "range": "stddev: 1.7531946333998727e-7",
            "extra": "mean: 1.277030175981716 usec\nrounds: 198181"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 817303.6984704434,
            "unit": "iter/sec",
            "range": "stddev: 7.559228065362478e-8",
            "extra": "mean: 1.2235353906650204 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 763205.4313155725,
            "unit": "iter/sec",
            "range": "stddev: 1.570192715227728e-7",
            "extra": "mean: 1.3102632121947217 usec\nrounds: 29977"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 801232.9924874536,
            "unit": "iter/sec",
            "range": "stddev: 8.027624849289078e-8",
            "extra": "mean: 1.2480764139472937 usec\nrounds: 172019"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 795939.618488772,
            "unit": "iter/sec",
            "range": "stddev: 1.5157621231648185e-7",
            "extra": "mean: 1.2563767109604014 usec\nrounds: 176952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 767765.6086350778,
            "unit": "iter/sec",
            "range": "stddev: 1.6550854616217626e-7",
            "extra": "mean: 1.3024808466971907 usec\nrounds: 158043"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 796725.4281884491,
            "unit": "iter/sec",
            "range": "stddev: 7.502020417614621e-8",
            "extra": "mean: 1.2551375475409958 usec\nrounds: 174706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 768465.242310648,
            "unit": "iter/sec",
            "range": "stddev: 2.2428718408158132e-7",
            "extra": "mean: 1.3012950292887226 usec\nrounds: 21487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 791474.6332999035,
            "unit": "iter/sec",
            "range": "stddev: 7.865170088040923e-8",
            "extra": "mean: 1.2634643713478089 usec\nrounds: 185705"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 793600.0327549011,
            "unit": "iter/sec",
            "range": "stddev: 7.718534579492868e-8",
            "extra": "mean: 1.2600805931529546 usec\nrounds: 180643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 796336.4289768061,
            "unit": "iter/sec",
            "range": "stddev: 7.357645898735136e-8",
            "extra": "mean: 1.2557506646843675 usec\nrounds: 179376"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 798149.3416819643,
            "unit": "iter/sec",
            "range": "stddev: 8.437222459229388e-8",
            "extra": "mean: 1.2528983584609237 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 732166.4019096019,
            "unit": "iter/sec",
            "range": "stddev: 2.3688868674521704e-7",
            "extra": "mean: 1.3658097358631143 usec\nrounds: 25687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 731923.5712274566,
            "unit": "iter/sec",
            "range": "stddev: 1.896417482109506e-7",
            "extra": "mean: 1.3662628713035867 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 750721.3851274643,
            "unit": "iter/sec",
            "range": "stddev: 8.575825893184075e-8",
            "extra": "mean: 1.3320521032316284 usec\nrounds: 175678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 723246.8642914032,
            "unit": "iter/sec",
            "range": "stddev: 1.8052481679074317e-7",
            "extra": "mean: 1.3826537650871726 usec\nrounds: 177949"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 720389.1160734545,
            "unit": "iter/sec",
            "range": "stddev: 1.8863854670665748e-7",
            "extra": "mean: 1.3881386846189316 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70249.42660098521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038105157321631357",
            "extra": "mean: 14.234991634593289 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58824.54773350468,
            "unit": "iter/sec",
            "range": "stddev: 7.000512653623361e-7",
            "extra": "mean: 16.999705710111737 usec\nrounds: 24341"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "153c6587e51c7cbd9d5c50aab66c9534563a7358",
          "message": "Allow testing with opentracing 2.x versions after 2.2.x (#3641)",
          "timestamp": "2024-01-31T04:49:22Z",
          "tree_id": "9e47e5f0395e308c83c550741656b68f4b6d6790",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/153c6587e51c7cbd9d5c50aab66c9534563a7358"
        },
        "date": 1706676638695,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 881647.3667167951,
            "unit": "iter/sec",
            "range": "stddev: 2.7140870783535616e-7",
            "extra": "mean: 1.1342403298088932 usec\nrounds: 31267"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 851515.704401521,
            "unit": "iter/sec",
            "range": "stddev: 2.0196169476029544e-7",
            "extra": "mean: 1.174376461679987 usec\nrounds: 104695"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 755056.6582079313,
            "unit": "iter/sec",
            "range": "stddev: 2.6477773193409014e-7",
            "extra": "mean: 1.3244039227114728 usec\nrounds: 120294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 669974.6856071326,
            "unit": "iter/sec",
            "range": "stddev: 2.4490633922896766e-7",
            "extra": "mean: 1.4925937076171731 usec\nrounds: 116991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 558630.3832506438,
            "unit": "iter/sec",
            "range": "stddev: 2.6580731112529826e-7",
            "extra": "mean: 1.7900923937954234 usec\nrounds: 106354"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 889728.7544041146,
            "unit": "iter/sec",
            "range": "stddev: 2.503024163422891e-7",
            "extra": "mean: 1.1239380485907058 usec\nrounds: 50927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 857089.456757276,
            "unit": "iter/sec",
            "range": "stddev: 1.9988981171147766e-7",
            "extra": "mean: 1.166739355053338 usec\nrounds: 135062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 757253.9940289763,
            "unit": "iter/sec",
            "range": "stddev: 2.302179082968862e-7",
            "extra": "mean: 1.3205608790248717 usec\nrounds: 120267"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 664925.7569966814,
            "unit": "iter/sec",
            "range": "stddev: 3.0280923757883885e-7",
            "extra": "mean: 1.5039273023754904 usec\nrounds: 130721"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 556250.3820851907,
            "unit": "iter/sec",
            "range": "stddev: 2.9927694988490523e-7",
            "extra": "mean: 1.797751574122691 usec\nrounds: 113744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 900648.8812758771,
            "unit": "iter/sec",
            "range": "stddev: 1.4840979682325289e-7",
            "extra": "mean: 1.1103106002678647 usec\nrounds: 36677"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 853451.6580388008,
            "unit": "iter/sec",
            "range": "stddev: 2.45659117451761e-7",
            "extra": "mean: 1.1717125282736713 usec\nrounds: 135986"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 764967.6432276015,
            "unit": "iter/sec",
            "range": "stddev: 2.277735059774467e-7",
            "extra": "mean: 1.3072448342791791 usec\nrounds: 136470"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 671737.4204128358,
            "unit": "iter/sec",
            "range": "stddev: 2.7133971347635763e-7",
            "extra": "mean: 1.488676928829454 usec\nrounds: 119464"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 561724.4913859147,
            "unit": "iter/sec",
            "range": "stddev: 3.0584027014998404e-7",
            "extra": "mean: 1.7802321517666961 usec\nrounds: 115407"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 768306.6328283871,
            "unit": "iter/sec",
            "range": "stddev: 1.1105881270085448e-7",
            "extra": "mean: 1.3015636690765953 usec\nrounds: 3841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 797698.7672160679,
            "unit": "iter/sec",
            "range": "stddev: 1.0481577476069466e-7",
            "extra": "mean: 1.253606049173116 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 769598.0461099531,
            "unit": "iter/sec",
            "range": "stddev: 2.2996369891930836e-7",
            "extra": "mean: 1.2993795982911438 usec\nrounds: 146287"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 788761.175980218,
            "unit": "iter/sec",
            "range": "stddev: 1.1044408823574978e-7",
            "extra": "mean: 1.2678108792021474 usec\nrounds: 184492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 757329.5459018878,
            "unit": "iter/sec",
            "range": "stddev: 2.262365603132037e-7",
            "extra": "mean: 1.3204291386903715 usec\nrounds: 196082"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 770570.5286652588,
            "unit": "iter/sec",
            "range": "stddev: 2.0777481594408218e-7",
            "extra": "mean: 1.2977397432161684 usec\nrounds: 18430"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 797107.442215075,
            "unit": "iter/sec",
            "range": "stddev: 1.2319471482973805e-7",
            "extra": "mean: 1.2545360224226596 usec\nrounds: 183045"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 779799.0109644891,
            "unit": "iter/sec",
            "range": "stddev: 1.0621706597446957e-7",
            "extra": "mean: 1.2823817239305764 usec\nrounds: 185384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 766921.9670736163,
            "unit": "iter/sec",
            "range": "stddev: 2.472481047443115e-7",
            "extra": "mean: 1.3039136221586551 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 804131.947469527,
            "unit": "iter/sec",
            "range": "stddev: 1.1542349388383342e-7",
            "extra": "mean: 1.2435770064189566 usec\nrounds: 186673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 757225.3802698033,
            "unit": "iter/sec",
            "range": "stddev: 1.6766916571332494e-7",
            "extra": "mean: 1.3206107799024047 usec\nrounds: 30971"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 743589.8974414918,
            "unit": "iter/sec",
            "range": "stddev: 2.351225344915301e-7",
            "extra": "mean: 1.3448273079566462 usec\nrounds: 177303"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 784856.6064640606,
            "unit": "iter/sec",
            "range": "stddev: 1.2525143781901208e-7",
            "extra": "mean: 1.2741180895516755 usec\nrounds: 173352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 783748.7439536818,
            "unit": "iter/sec",
            "range": "stddev: 1.0692125023565623e-7",
            "extra": "mean: 1.2759191101926641 usec\nrounds: 184113"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 765886.6412336814,
            "unit": "iter/sec",
            "range": "stddev: 1.053896839801975e-7",
            "extra": "mean: 1.3056762530669181 usec\nrounds: 176661"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 757328.4206953212,
            "unit": "iter/sec",
            "range": "stddev: 1.4975637208914017e-7",
            "extra": "mean: 1.3204311005281915 usec\nrounds: 29833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 750722.093313736,
            "unit": "iter/sec",
            "range": "stddev: 2.4545331889277986e-7",
            "extra": "mean: 1.3320508466534335 usec\nrounds: 190380"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 772589.4247096125,
            "unit": "iter/sec",
            "range": "stddev: 1.79376846579055e-7",
            "extra": "mean: 1.294348547905458 usec\nrounds: 179616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 746693.5073829783,
            "unit": "iter/sec",
            "range": "stddev: 2.851088714251241e-7",
            "extra": "mean: 1.339237572193193 usec\nrounds: 161078"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 744355.3042038663,
            "unit": "iter/sec",
            "range": "stddev: 2.403996830629738e-7",
            "extra": "mean: 1.3434444469628137 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 721553.0057445129,
            "unit": "iter/sec",
            "range": "stddev: 1.976681736481536e-7",
            "extra": "mean: 1.3858995694546097 usec\nrounds: 24814"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 737258.3998960403,
            "unit": "iter/sec",
            "range": "stddev: 1.245090355671907e-7",
            "extra": "mean: 1.356376543340854 usec\nrounds: 169789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 702304.6528944903,
            "unit": "iter/sec",
            "range": "stddev: 2.5100126082677825e-7",
            "extra": "mean: 1.4238834897057608 usec\nrounds: 193328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 705238.0174791673,
            "unit": "iter/sec",
            "range": "stddev: 2.807043878775375e-7",
            "extra": "mean: 1.4179609936152369 usec\nrounds: 182362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 703445.1050970764,
            "unit": "iter/sec",
            "range": "stddev: 2.624430531674407e-7",
            "extra": "mean: 1.421575035143643 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71669.0897956289,
            "unit": "iter/sec",
            "range": "stddev: 0.00000411850585077592",
            "extra": "mean: 13.953016605228186 usec\nrounds: 32"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58269.07316265683,
            "unit": "iter/sec",
            "range": "stddev: 9.716804543667724e-7",
            "extra": "mean: 17.16176259074041 usec\nrounds: 21524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "153c6587e51c7cbd9d5c50aab66c9534563a7358",
          "message": "Allow testing with opentracing 2.x versions after 2.2.x (#3641)",
          "timestamp": "2024-01-31T04:49:22Z",
          "tree_id": "9e47e5f0395e308c83c550741656b68f4b6d6790",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/153c6587e51c7cbd9d5c50aab66c9534563a7358"
        },
        "date": 1706676713122,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 907630.2612082702,
            "unit": "iter/sec",
            "range": "stddev: 9.051828606170515e-8",
            "extra": "mean: 1.10177022818605 usec\nrounds: 31238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 856522.5428443293,
            "unit": "iter/sec",
            "range": "stddev: 1.336778458987244e-7",
            "extra": "mean: 1.167511594825295 usec\nrounds: 102830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 765465.2798265404,
            "unit": "iter/sec",
            "range": "stddev: 1.6346966701928663e-7",
            "extra": "mean: 1.3063949813982507 usec\nrounds: 106333"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 672401.4555201054,
            "unit": "iter/sec",
            "range": "stddev: 1.3308279495121826e-7",
            "extra": "mean: 1.4872067747481237 usec\nrounds: 110764"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 560512.5670691796,
            "unit": "iter/sec",
            "range": "stddev: 1.704863942356353e-7",
            "extra": "mean: 1.7840813190484237 usec\nrounds: 101990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 886492.8178010435,
            "unit": "iter/sec",
            "range": "stddev: 1.628836667176116e-7",
            "extra": "mean: 1.1280407239852348 usec\nrounds: 52676"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 853656.8341962016,
            "unit": "iter/sec",
            "range": "stddev: 1.2147646284279802e-7",
            "extra": "mean: 1.171430907528075 usec\nrounds: 132137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 756482.0010601465,
            "unit": "iter/sec",
            "range": "stddev: 1.3937065093780207e-7",
            "extra": "mean: 1.3219085167903313 usec\nrounds: 130785"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 668844.8000790814,
            "unit": "iter/sec",
            "range": "stddev: 1.1776462792585375e-7",
            "extra": "mean: 1.4951151595732883 usec\nrounds: 121492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 537705.0094180573,
            "unit": "iter/sec",
            "range": "stddev: 1.799256533853798e-7",
            "extra": "mean: 1.8597557814874577 usec\nrounds: 120945"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 907074.858578995,
            "unit": "iter/sec",
            "range": "stddev: 1.0248103523112773e-7",
            "extra": "mean: 1.1024448429389606 usec\nrounds: 34157"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 861198.4057312886,
            "unit": "iter/sec",
            "range": "stddev: 1.249158614267197e-7",
            "extra": "mean: 1.1611726094068275 usec\nrounds: 131554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 771028.9055474856,
            "unit": "iter/sec",
            "range": "stddev: 1.6660998317875987e-7",
            "extra": "mean: 1.296968236605771 usec\nrounds: 118672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 673674.8675952922,
            "unit": "iter/sec",
            "range": "stddev: 1.460383233460428e-7",
            "extra": "mean: 1.4843955862113984 usec\nrounds: 126412"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 564279.7826920114,
            "unit": "iter/sec",
            "range": "stddev: 1.267063647376955e-7",
            "extra": "mean: 1.772170527232602 usec\nrounds: 111500"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 764218.5588908372,
            "unit": "iter/sec",
            "range": "stddev: 1.644233219277353e-7",
            "extra": "mean: 1.3085261910563497 usec\nrounds: 3938"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 794695.6422168346,
            "unit": "iter/sec",
            "range": "stddev: 6.814354877658496e-8",
            "extra": "mean: 1.2583433793728387 usec\nrounds: 184556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 784508.6429121855,
            "unit": "iter/sec",
            "range": "stddev: 1.7737781952955557e-7",
            "extra": "mean: 1.274683216092924 usec\nrounds: 159831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 810318.445187667,
            "unit": "iter/sec",
            "range": "stddev: 7.112373036313798e-8",
            "extra": "mean: 1.2340827312259977 usec\nrounds: 189239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 816552.8801814696,
            "unit": "iter/sec",
            "range": "stddev: 6.764817300880686e-8",
            "extra": "mean: 1.2246604283335103 usec\nrounds: 181991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 777072.0860042301,
            "unit": "iter/sec",
            "range": "stddev: 1.3517297792055846e-7",
            "extra": "mean: 1.2868818968161422 usec\nrounds: 17975"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 802587.3836229482,
            "unit": "iter/sec",
            "range": "stddev: 1.5700988472081485e-7",
            "extra": "mean: 1.2459702462377547 usec\nrounds: 184873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 776545.9987682888,
            "unit": "iter/sec",
            "range": "stddev: 1.5379302318565425e-7",
            "extra": "mean: 1.287753721719178 usec\nrounds: 166214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 812939.0481948531,
            "unit": "iter/sec",
            "range": "stddev: 6.305294076118877e-8",
            "extra": "mean: 1.2301045228673901 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 785300.2895177722,
            "unit": "iter/sec",
            "range": "stddev: 6.944861040694306e-8",
            "extra": "mean: 1.2733982316676187 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 761689.3522873203,
            "unit": "iter/sec",
            "range": "stddev: 1.4577343731758274e-7",
            "extra": "mean: 1.312871181666178 usec\nrounds: 27897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 790305.5436202111,
            "unit": "iter/sec",
            "range": "stddev: 7.962224593690018e-8",
            "extra": "mean: 1.2653333993068376 usec\nrounds: 180887"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 789645.3625606949,
            "unit": "iter/sec",
            "range": "stddev: 6.436753956382046e-8",
            "extra": "mean: 1.26639127817728 usec\nrounds: 181253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 757722.0464366728,
            "unit": "iter/sec",
            "range": "stddev: 1.5339595066247898e-7",
            "extra": "mean: 1.3197451554995447 usec\nrounds: 199358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788992.6060490918,
            "unit": "iter/sec",
            "range": "stddev: 6.583488253392078e-8",
            "extra": "mean: 1.2674390004838387 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 755885.508173374,
            "unit": "iter/sec",
            "range": "stddev: 1.6160607640875913e-7",
            "extra": "mean: 1.3229516761295477 usec\nrounds: 28084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 787565.8403102021,
            "unit": "iter/sec",
            "range": "stddev: 7.140195138240486e-8",
            "extra": "mean: 1.2697351114239865 usec\nrounds: 178719"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 791857.4051008478,
            "unit": "iter/sec",
            "range": "stddev: 6.834342299634028e-8",
            "extra": "mean: 1.262853631927132 usec\nrounds: 178008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 760366.5027522461,
            "unit": "iter/sec",
            "range": "stddev: 1.6852505860936033e-7",
            "extra": "mean: 1.3151552526056436 usec\nrounds: 182114"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 791037.5601881249,
            "unit": "iter/sec",
            "range": "stddev: 6.672321656623248e-8",
            "extra": "mean: 1.2641624751196132 usec\nrounds: 174649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 730006.2192882387,
            "unit": "iter/sec",
            "range": "stddev: 1.3797474219909404e-7",
            "extra": "mean: 1.3698513431502093 usec\nrounds: 25375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 726911.9697382625,
            "unit": "iter/sec",
            "range": "stddev: 1.5752251556099764e-7",
            "extra": "mean: 1.3756823957102642 usec\nrounds: 197307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 744721.0995151164,
            "unit": "iter/sec",
            "range": "stddev: 7.625201061258457e-8",
            "extra": "mean: 1.3427845681438246 usec\nrounds: 173633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 708470.2616780238,
            "unit": "iter/sec",
            "range": "stddev: 1.7728536264414487e-7",
            "extra": "mean: 1.4114918495399975 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 713339.1045334998,
            "unit": "iter/sec",
            "range": "stddev: 1.6239152499480617e-7",
            "extra": "mean: 1.4018578171933627 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 68258.2118315758,
            "unit": "iter/sec",
            "range": "stddev: 0.000004712206486792178",
            "extra": "mean: 14.650251935510074 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58635.51552964352,
            "unit": "iter/sec",
            "range": "stddev: 6.80181303670039e-7",
            "extra": "mean: 17.05451023952274 usec\nrounds: 23004"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33345681+davidecotten@users.noreply.github.com",
            "name": "David Cotten",
            "username": "davidecotten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1061d96562990b1c2b596ace87239e7f9616589a",
          "message": "Fix: Include key in attribute sequence warning (#3639)\n\n* Fix: Include key in attribute sequence warning\r\n\r\n* Add CHANGELOG entry\r\n\r\n---------",
          "timestamp": "2024-01-31T01:58:23-06:00",
          "tree_id": "1e479adf6bba094c2a8a8d240a75cf7c3ea2bfc5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1061d96562990b1c2b596ace87239e7f9616589a"
        },
        "date": 1706687958976,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 933069.2515113141,
            "unit": "iter/sec",
            "range": "stddev: 7.666148286165061e-8",
            "extra": "mean: 1.0717318123818533 usec\nrounds: 29764"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 882223.5287541497,
            "unit": "iter/sec",
            "range": "stddev: 4.778172172289016e-7",
            "extra": "mean: 1.1334995807833088 usec\nrounds: 102692"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 784493.89939002,
            "unit": "iter/sec",
            "range": "stddev: 1.393944841011505e-7",
            "extra": "mean: 1.2747071720730345 usec\nrounds: 118176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 685653.1873653134,
            "unit": "iter/sec",
            "range": "stddev: 1.4910880414153756e-7",
            "extra": "mean: 1.458463284977342 usec\nrounds: 110993"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 578664.2948709956,
            "unit": "iter/sec",
            "range": "stddev: 2.0979611990735516e-7",
            "extra": "mean: 1.7281176821578992 usec\nrounds: 111732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 926901.5458457962,
            "unit": "iter/sec",
            "range": "stddev: 7.158026754016289e-8",
            "extra": "mean: 1.0788632347004032 usec\nrounds: 50288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 884282.4729509925,
            "unit": "iter/sec",
            "range": "stddev: 1.1013907117415422e-7",
            "extra": "mean: 1.1308603648592508 usec\nrounds: 139556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 785017.565927704,
            "unit": "iter/sec",
            "range": "stddev: 4.321516795146116e-7",
            "extra": "mean: 1.2738568452519121 usec\nrounds: 126353"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672630.7585351336,
            "unit": "iter/sec",
            "range": "stddev: 1.8150107315154984e-7",
            "extra": "mean: 1.486699778906657 usec\nrounds: 128254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 573440.7342923812,
            "unit": "iter/sec",
            "range": "stddev: 1.936691534659265e-7",
            "extra": "mean: 1.743859374123444 usec\nrounds: 114253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928665.4671533393,
            "unit": "iter/sec",
            "range": "stddev: 1.4295261281755392e-7",
            "extra": "mean: 1.0768140254696066 usec\nrounds: 36276"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 884900.5728943654,
            "unit": "iter/sec",
            "range": "stddev: 1.3079568348666065e-7",
            "extra": "mean: 1.1300704628647298 usec\nrounds: 138978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 792338.9758251891,
            "unit": "iter/sec",
            "range": "stddev: 2.067727633554225e-7",
            "extra": "mean: 1.2620860900582864 usec\nrounds: 125087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 695029.2508033182,
            "unit": "iter/sec",
            "range": "stddev: 1.600730243008557e-7",
            "extra": "mean: 1.4387883658769687 usec\nrounds: 109857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 579743.959997449,
            "unit": "iter/sec",
            "range": "stddev: 1.529541589798677e-7",
            "extra": "mean: 1.7248993849015697 usec\nrounds: 117170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 778847.1559206569,
            "unit": "iter/sec",
            "range": "stddev: 1.295986404942231e-7",
            "extra": "mean: 1.2839489653370095 usec\nrounds: 3986"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 822327.4656851904,
            "unit": "iter/sec",
            "range": "stddev: 1.1220272076854185e-7",
            "extra": "mean: 1.2160605619158873 usec\nrounds: 188244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 782819.0195617791,
            "unit": "iter/sec",
            "range": "stddev: 1.904783275562008e-7",
            "extra": "mean: 1.277434470817787 usec\nrounds: 143934"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 793305.8146597159,
            "unit": "iter/sec",
            "range": "stddev: 3.947324033892375e-7",
            "extra": "mean: 1.2605479268155177 usec\nrounds: 194378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 822645.1350019122,
            "unit": "iter/sec",
            "range": "stddev: 7.348908734298496e-8",
            "extra": "mean: 1.215590972889757 usec\nrounds: 189909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 784438.8436654414,
            "unit": "iter/sec",
            "range": "stddev: 2.189841655452469e-7",
            "extra": "mean: 1.274796637207953 usec\nrounds: 18488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 784985.3416528568,
            "unit": "iter/sec",
            "range": "stddev: 1.6291256449581648e-7",
            "extra": "mean: 1.2739091380921976 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 821267.846856937,
            "unit": "iter/sec",
            "range": "stddev: 1.1361276377104751e-7",
            "extra": "mean: 1.2176295514637354 usec\nrounds: 194872"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 828674.917982643,
            "unit": "iter/sec",
            "range": "stddev: 1.0855366412111341e-7",
            "extra": "mean: 1.2067458279471486 usec\nrounds: 191126"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 828416.0181089509,
            "unit": "iter/sec",
            "range": "stddev: 1.09172481239055e-7",
            "extra": "mean: 1.207122964959959 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 763192.3694904109,
            "unit": "iter/sec",
            "range": "stddev: 1.1274133625183525e-7",
            "extra": "mean: 1.3102856369852167 usec\nrounds: 30248"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 805252.5924049235,
            "unit": "iter/sec",
            "range": "stddev: 1.05550059622225e-7",
            "extra": "mean: 1.2418463590579132 usec\nrounds: 192083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 773510.2229105321,
            "unit": "iter/sec",
            "range": "stddev: 1.5622861754410427e-7",
            "extra": "mean: 1.2928077359304204 usec\nrounds: 199878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 805934.1522790624,
            "unit": "iter/sec",
            "range": "stddev: 1.1936383387485969e-7",
            "extra": "mean: 1.2407961583116287 usec\nrounds: 186479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 807074.4635228277,
            "unit": "iter/sec",
            "range": "stddev: 1.0656076078791251e-7",
            "extra": "mean: 1.2390430439777078 usec\nrounds: 190111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 759562.120404703,
            "unit": "iter/sec",
            "range": "stddev: 1.4044180011112246e-7",
            "extra": "mean: 1.3165480125143538 usec\nrounds: 28949"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 802724.3783087237,
            "unit": "iter/sec",
            "range": "stddev: 1.1106028020055406e-7",
            "extra": "mean: 1.245757606249508 usec\nrounds: 176952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 799310.4053003838,
            "unit": "iter/sec",
            "range": "stddev: 1.0928326230735255e-7",
            "extra": "mean: 1.2510784213101744 usec\nrounds: 183421"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 764684.3282205793,
            "unit": "iter/sec",
            "range": "stddev: 1.7244625756218645e-7",
            "extra": "mean: 1.307729167572978 usec\nrounds: 187521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 799027.3802926171,
            "unit": "iter/sec",
            "range": "stddev: 1.1597105328698868e-7",
            "extra": "mean: 1.2515215681767793 usec\nrounds: 184746"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 743580.6584128262,
            "unit": "iter/sec",
            "range": "stddev: 1.2051304254926083e-7",
            "extra": "mean: 1.3448440175064547 usec\nrounds: 25936"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 739833.6356015323,
            "unit": "iter/sec",
            "range": "stddev: 3.717480685548649e-7",
            "extra": "mean: 1.3516552260927361 usec\nrounds: 187259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 726584.5349754082,
            "unit": "iter/sec",
            "range": "stddev: 1.6871396631786224e-7",
            "extra": "mean: 1.3763023459257164 usec\nrounds: 190718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 721590.8583584275,
            "unit": "iter/sec",
            "range": "stddev: 1.6784648289221292e-7",
            "extra": "mean: 1.3858268690860847 usec\nrounds: 185001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 750216.9486589119,
            "unit": "iter/sec",
            "range": "stddev: 1.9760913174081814e-7",
            "extra": "mean: 1.3329477583618985 usec\nrounds: 149588"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70351.14578311818,
            "unit": "iter/sec",
            "range": "stddev: 0.000004054929064795923",
            "extra": "mean: 14.214409571705442 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 56574.78296740402,
            "unit": "iter/sec",
            "range": "stddev: 0.000001272471069216678",
            "extra": "mean: 17.67571959712435 usec\nrounds: 22227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33345681+davidecotten@users.noreply.github.com",
            "name": "David Cotten",
            "username": "davidecotten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1061d96562990b1c2b596ace87239e7f9616589a",
          "message": "Fix: Include key in attribute sequence warning (#3639)\n\n* Fix: Include key in attribute sequence warning\r\n\r\n* Add CHANGELOG entry\r\n\r\n---------",
          "timestamp": "2024-01-31T01:58:23-06:00",
          "tree_id": "1e479adf6bba094c2a8a8d240a75cf7c3ea2bfc5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1061d96562990b1c2b596ace87239e7f9616589a"
        },
        "date": 1706688013913,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 915973.5433933673,
            "unit": "iter/sec",
            "range": "stddev: 1.7221248417607156e-7",
            "extra": "mean: 1.0917345890748584 usec\nrounds: 31001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 866421.8194951423,
            "unit": "iter/sec",
            "range": "stddev: 2.677223328211681e-7",
            "extra": "mean: 1.1541722259288123 usec\nrounds: 95056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 775855.030143591,
            "unit": "iter/sec",
            "range": "stddev: 3.0776484048266995e-7",
            "extra": "mean: 1.2889005821292743 usec\nrounds: 103067"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 680894.5379585079,
            "unit": "iter/sec",
            "range": "stddev: 3.358696141227276e-7",
            "extra": "mean: 1.4686562224426858 usec\nrounds: 112789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 566071.6401812029,
            "unit": "iter/sec",
            "range": "stddev: 3.067440351924229e-7",
            "extra": "mean: 1.7665608538168316 usec\nrounds: 77071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 903414.782982944,
            "unit": "iter/sec",
            "range": "stddev: 2.0118708523595014e-7",
            "extra": "mean: 1.1069112647217767 usec\nrounds: 49214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870645.5407679529,
            "unit": "iter/sec",
            "range": "stddev: 2.6091603633628955e-7",
            "extra": "mean: 1.1485730451429752 usec\nrounds: 129025"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 776969.8224727552,
            "unit": "iter/sec",
            "range": "stddev: 2.2556986846106044e-7",
            "extra": "mean: 1.2870512741633096 usec\nrounds: 121630"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672855.5681644075,
            "unit": "iter/sec",
            "range": "stddev: 2.1666391212699998e-7",
            "extra": "mean: 1.4862030535439623 usec\nrounds: 124133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568738.2962816032,
            "unit": "iter/sec",
            "range": "stddev: 2.659561960629438e-7",
            "extra": "mean: 1.758277940026151 usec\nrounds: 121190"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922317.6513746385,
            "unit": "iter/sec",
            "range": "stddev: 1.8239972494971033e-7",
            "extra": "mean: 1.0842251566036738 usec\nrounds: 36448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 879071.2859483408,
            "unit": "iter/sec",
            "range": "stddev: 2.2474048481215644e-7",
            "extra": "mean: 1.1375641725360208 usec\nrounds: 132659"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 787876.5150855324,
            "unit": "iter/sec",
            "range": "stddev: 2.0855225469808275e-7",
            "extra": "mean: 1.2692344305902292 usec\nrounds: 131554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 689697.9074081905,
            "unit": "iter/sec",
            "range": "stddev: 1.9995114153154345e-7",
            "extra": "mean: 1.4499101552415765 usec\nrounds: 125643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 577280.4066280596,
            "unit": "iter/sec",
            "range": "stddev: 2.3735385306339977e-7",
            "extra": "mean: 1.7322604206179089 usec\nrounds: 125087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 772496.3205901899,
            "unit": "iter/sec",
            "range": "stddev: 4.4285930779717967e-7",
            "extra": "mean: 1.2945045475892967 usec\nrounds: 3854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 798307.9286891298,
            "unit": "iter/sec",
            "range": "stddev: 1.103921215750578e-7",
            "extra": "mean: 1.2526494652784683 usec\nrounds: 195939"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 790303.5519807752,
            "unit": "iter/sec",
            "range": "stddev: 2.608059450334813e-7",
            "extra": "mean: 1.2653365880662597 usec\nrounds: 143703"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 821622.2836016808,
            "unit": "iter/sec",
            "range": "stddev: 1.0226866468381056e-7",
            "extra": "mean: 1.2171042825376874 usec\nrounds: 189239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 774830.8910373801,
            "unit": "iter/sec",
            "range": "stddev: 2.7913104226132666e-7",
            "extra": "mean: 1.2906041970798983 usec\nrounds: 197017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 768263.7373857278,
            "unit": "iter/sec",
            "range": "stddev: 2.8572381463896133e-7",
            "extra": "mean: 1.301636340930045 usec\nrounds: 18261"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 818989.2165579371,
            "unit": "iter/sec",
            "range": "stddev: 1.1126020482255236e-7",
            "extra": "mean: 1.221017297642597 usec\nrounds: 187390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 821164.7457947097,
            "unit": "iter/sec",
            "range": "stddev: 1.0699846307179957e-7",
            "extra": "mean: 1.2177824305306928 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 819583.1912324884,
            "unit": "iter/sec",
            "range": "stddev: 1.0143996966013736e-7",
            "extra": "mean: 1.220132392535041 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 820791.2107829545,
            "unit": "iter/sec",
            "range": "stddev: 1.0923220322094634e-7",
            "extra": "mean: 1.2183366328278513 usec\nrounds: 191809"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 758911.1454898688,
            "unit": "iter/sec",
            "range": "stddev: 2.8236272758409654e-7",
            "extra": "mean: 1.3176773143244735 usec\nrounds: 27107"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 787387.3698991401,
            "unit": "iter/sec",
            "range": "stddev: 1.1966723973070507e-7",
            "extra": "mean: 1.2700229115030057 usec\nrounds: 179736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 747464.7900483966,
            "unit": "iter/sec",
            "range": "stddev: 2.6112928419939e-7",
            "extra": "mean: 1.3378556599773115 usec\nrounds: 197597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 801534.3013517336,
            "unit": "iter/sec",
            "range": "stddev: 1.2095378440661986e-7",
            "extra": "mean: 1.2476072431505019 usec\nrounds: 184873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 799905.3919256537,
            "unit": "iter/sec",
            "range": "stddev: 1.0853489205245235e-7",
            "extra": "mean: 1.2501478426000459 usec\nrounds: 181253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 752288.4486310293,
            "unit": "iter/sec",
            "range": "stddev: 2.833556020082021e-7",
            "extra": "mean: 1.3292773560723175 usec\nrounds: 26266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 793347.8044662108,
            "unit": "iter/sec",
            "range": "stddev: 1.0740481286153756e-7",
            "extra": "mean: 1.2604812093389877 usec\nrounds: 180280"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 797413.5276945949,
            "unit": "iter/sec",
            "range": "stddev: 1.0767395691902084e-7",
            "extra": "mean: 1.254054471449843 usec\nrounds: 182362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 760135.8188128347,
            "unit": "iter/sec",
            "range": "stddev: 2.4206563473435474e-7",
            "extra": "mean: 1.31555437232491 usec\nrounds: 81025"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 790904.7016940293,
            "unit": "iter/sec",
            "range": "stddev: 1.1281936850148666e-7",
            "extra": "mean: 1.2643748328440987 usec\nrounds: 181560"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 734981.6253339049,
            "unit": "iter/sec",
            "range": "stddev: 2.406435538886088e-7",
            "extra": "mean: 1.3605782315247625 usec\nrounds: 24477"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 734523.5040754806,
            "unit": "iter/sec",
            "range": "stddev: 2.4613675129344617e-7",
            "extra": "mean: 1.361426822220843 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 753690.1974980079,
            "unit": "iter/sec",
            "range": "stddev: 1.1137411365473581e-7",
            "extra": "mean: 1.3268051028388799 usec\nrounds: 174706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 753137.1094339238,
            "unit": "iter/sec",
            "range": "stddev: 1.1654026241967671e-7",
            "extra": "mean: 1.3277794806202343 usec\nrounds: 176197"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 747920.6601662557,
            "unit": "iter/sec",
            "range": "stddev: 1.1814541740346352e-7",
            "extra": "mean: 1.3370402146368165 usec\nrounds: 173689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73135.5565135865,
            "unit": "iter/sec",
            "range": "stddev: 0.000004125129655353623",
            "extra": "mean: 13.673239771057577 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59116.27191342824,
            "unit": "iter/sec",
            "range": "stddev: 9.963650486486559e-7",
            "extra": "mean: 16.915816367182828 usec\nrounds: 23360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kalungi2k6@gmail.com",
            "name": "Kalungi Deborah",
            "username": "nanfuka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43e197669e708268644b33af689f5215bb447224",
          "message": "Add prometheus monitoring to python app (#3004)\n\n* Use OTEL exporter\r\n\r\n* Fix errors\r\n\r\n* Add requirements file in prometheus example directory\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-02-02T15:36:04-06:00",
          "tree_id": "2b17cc53742449377bbc7f25b6912800289d3c34",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/43e197669e708268644b33af689f5215bb447224"
        },
        "date": 1706962354953,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 918400.5865067185,
            "unit": "iter/sec",
            "range": "stddev: 1.793738661458945e-7",
            "extra": "mean: 1.0888494788572138 usec\nrounds: 32578"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874185.1643507989,
            "unit": "iter/sec",
            "range": "stddev: 1.7272904423178775e-7",
            "extra": "mean: 1.143922410010968 usec\nrounds: 103146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 786413.6810136754,
            "unit": "iter/sec",
            "range": "stddev: 1.4280440558850129e-7",
            "extra": "mean: 1.2715953754911984 usec\nrounds: 115036"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 670636.6715539111,
            "unit": "iter/sec",
            "range": "stddev: 2.5081176921612725e-7",
            "extra": "mean: 1.4911203672816336 usec\nrounds: 117735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 568781.8960451873,
            "unit": "iter/sec",
            "range": "stddev: 2.2716649029561218e-7",
            "extra": "mean: 1.7581431598880466 usec\nrounds: 109187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 907129.2996262643,
            "unit": "iter/sec",
            "range": "stddev: 1.5339354829779694e-7",
            "extra": "mean: 1.1023786800977526 usec\nrounds: 51633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 875185.1658498944,
            "unit": "iter/sec",
            "range": "stddev: 1.4189648485993064e-7",
            "extra": "mean: 1.1426153447526703 usec\nrounds: 142861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 786256.6033057455,
            "unit": "iter/sec",
            "range": "stddev: 1.6632319421729914e-7",
            "extra": "mean: 1.2718494137862746 usec\nrounds: 122798"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 678010.6114753442,
            "unit": "iter/sec",
            "range": "stddev: 1.4955917480477656e-7",
            "extra": "mean: 1.4749031697660455 usec\nrounds: 120945"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 566924.8102353008,
            "unit": "iter/sec",
            "range": "stddev: 1.6152282475484888e-7",
            "extra": "mean: 1.7639023410969656 usec\nrounds: 125438"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922947.7840356764,
            "unit": "iter/sec",
            "range": "stddev: 8.911677304648468e-8",
            "extra": "mean: 1.0834849135531868 usec\nrounds: 34088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883493.1170953793,
            "unit": "iter/sec",
            "range": "stddev: 1.3268712638161493e-7",
            "extra": "mean: 1.1318707306828322 usec\nrounds: 130025"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 778430.2704483873,
            "unit": "iter/sec",
            "range": "stddev: 1.5299890080245325e-7",
            "extra": "mean: 1.284636579489625 usec\nrounds: 127796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 680371.774362583,
            "unit": "iter/sec",
            "range": "stddev: 1.2470364282597555e-7",
            "extra": "mean: 1.4697846643283603 usec\nrounds: 120591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 568574.3464005435,
            "unit": "iter/sec",
            "range": "stddev: 1.4251117371062763e-7",
            "extra": "mean: 1.7587849440106995 usec\nrounds: 130341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 775397.285833847,
            "unit": "iter/sec",
            "range": "stddev: 2.0978820015586008e-7",
            "extra": "mean: 1.2896614655087677 usec\nrounds: 3995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 819228.1540727069,
            "unit": "iter/sec",
            "range": "stddev: 8.072596062168745e-8",
            "extra": "mean: 1.2206611736042086 usec\nrounds: 192358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 794312.2333541375,
            "unit": "iter/sec",
            "range": "stddev: 1.8784724899378776e-7",
            "extra": "mean: 1.2589507727676632 usec\nrounds: 158744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 789139.792478182,
            "unit": "iter/sec",
            "range": "stddev: 1.866830914838353e-7",
            "extra": "mean: 1.2672026040654234 usec\nrounds: 199804"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 822559.2530593674,
            "unit": "iter/sec",
            "range": "stddev: 7.500799588794321e-8",
            "extra": "mean: 1.215717890572226 usec\nrounds: 194167"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 788307.0169606691,
            "unit": "iter/sec",
            "range": "stddev: 1.3763077505953215e-7",
            "extra": "mean: 1.2685412897319075 usec\nrounds: 19129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 823788.7743893138,
            "unit": "iter/sec",
            "range": "stddev: 8.928654969829516e-8",
            "extra": "mean: 1.213903407146224 usec\nrounds: 189373"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 799131.2858527239,
            "unit": "iter/sec",
            "range": "stddev: 1.5756308827794597e-7",
            "extra": "mean: 1.2513588414110661 usec\nrounds: 192221"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 825504.2402562054,
            "unit": "iter/sec",
            "range": "stddev: 6.862766406282063e-8",
            "extra": "mean: 1.2113808157904042 usec\nrounds: 189173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 831230.3129956555,
            "unit": "iter/sec",
            "range": "stddev: 7.35271148472212e-8",
            "extra": "mean: 1.2030360110378056 usec\nrounds: 185576"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 778659.1190052693,
            "unit": "iter/sec",
            "range": "stddev: 1.094953627539977e-7",
            "extra": "mean: 1.284259023740057 usec\nrounds: 29513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 805641.2696768232,
            "unit": "iter/sec",
            "range": "stddev: 8.243346890600714e-8",
            "extra": "mean: 1.2412472370005851 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 809033.9784661864,
            "unit": "iter/sec",
            "range": "stddev: 7.71183062687871e-8",
            "extra": "mean: 1.2360420286622054 usec\nrounds: 178600"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 808408.3574142744,
            "unit": "iter/sec",
            "range": "stddev: 7.583282211386633e-8",
            "extra": "mean: 1.2369985921453595 usec\nrounds: 179496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 777024.4901828017,
            "unit": "iter/sec",
            "range": "stddev: 1.777435346878118e-7",
            "extra": "mean: 1.2869607234190796 usec\nrounds: 182300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 765148.0207355611,
            "unit": "iter/sec",
            "range": "stddev: 1.6727734855905256e-7",
            "extra": "mean: 1.306936661796064 usec\nrounds: 28363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 775575.6358915577,
            "unit": "iter/sec",
            "range": "stddev: 1.7877370828285922e-7",
            "extra": "mean: 1.2893648971456624 usec\nrounds: 193467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 806992.1845438125,
            "unit": "iter/sec",
            "range": "stddev: 7.554053404133173e-8",
            "extra": "mean: 1.2391693738214995 usec\nrounds: 180280"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 806506.2784144186,
            "unit": "iter/sec",
            "range": "stddev: 6.967935489982208e-8",
            "extra": "mean: 1.2399159520072027 usec\nrounds: 187849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 807333.6060458942,
            "unit": "iter/sec",
            "range": "stddev: 7.376361818834098e-8",
            "extra": "mean: 1.238645328908993 usec\nrounds: 185512"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 738470.6481782757,
            "unit": "iter/sec",
            "range": "stddev: 1.8451288297387783e-7",
            "extra": "mean: 1.3541499617715178 usec\nrounds: 26309"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 759613.8609465192,
            "unit": "iter/sec",
            "range": "stddev: 7.613295558863054e-8",
            "extra": "mean: 1.3164583368106881 usec\nrounds: 173577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 752911.4785837354,
            "unit": "iter/sec",
            "range": "stddev: 1.0132482655859494e-7",
            "extra": "mean: 1.3281773866445106 usec\nrounds: 176545"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 755121.6235030906,
            "unit": "iter/sec",
            "range": "stddev: 7.740245428151771e-8",
            "extra": "mean: 1.3242899804151975 usec\nrounds: 166266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 750986.6854195707,
            "unit": "iter/sec",
            "range": "stddev: 8.61151677893931e-8",
            "extra": "mean: 1.3315815305584378 usec\nrounds: 170652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73434.5251203064,
            "unit": "iter/sec",
            "range": "stddev: 0.000004120547685860619",
            "extra": "mean: 13.617572910857923 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 60173.445337803285,
            "unit": "iter/sec",
            "range": "stddev: 7.104034515230525e-7",
            "extra": "mean: 16.618626279186334 usec\nrounds: 23472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kalungi2k6@gmail.com",
            "name": "Kalungi Deborah",
            "username": "nanfuka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43e197669e708268644b33af689f5215bb447224",
          "message": "Add prometheus monitoring to python app (#3004)\n\n* Use OTEL exporter\r\n\r\n* Fix errors\r\n\r\n* Add requirements file in prometheus example directory\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-02-02T15:36:04-06:00",
          "tree_id": "2b17cc53742449377bbc7f25b6912800289d3c34",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/43e197669e708268644b33af689f5215bb447224"
        },
        "date": 1706962409468,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 894156.2366708741,
            "unit": "iter/sec",
            "range": "stddev: 2.0739709883057536e-7",
            "extra": "mean: 1.118372784294615 usec\nrounds: 31068"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 859995.6030670418,
            "unit": "iter/sec",
            "range": "stddev: 2.207507303982328e-7",
            "extra": "mean: 1.1627966427196303 usec\nrounds: 104879"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 759939.1930408247,
            "unit": "iter/sec",
            "range": "stddev: 2.817028705346789e-7",
            "extra": "mean: 1.3158947573141935 usec\nrounds: 126056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674437.7142337124,
            "unit": "iter/sec",
            "range": "stddev: 2.2749467425274465e-7",
            "extra": "mean: 1.4827166080654124 usec\nrounds: 109054"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 561291.4019337902,
            "unit": "iter/sec",
            "range": "stddev: 2.3730638339942506e-7",
            "extra": "mean: 1.7816057694002587 usec\nrounds: 112741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 917696.1570242115,
            "unit": "iter/sec",
            "range": "stddev: 2.2470121453969104e-7",
            "extra": "mean: 1.089685286732237 usec\nrounds: 53704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 860952.1906156226,
            "unit": "iter/sec",
            "range": "stddev: 1.9554044604615053e-7",
            "extra": "mean: 1.1615046815607164 usec\nrounds: 143972"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782080.7145055818,
            "unit": "iter/sec",
            "range": "stddev: 2.1382367366508924e-7",
            "extra": "mean: 1.278640403033315 usec\nrounds: 123675"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 667579.8551438954,
            "unit": "iter/sec",
            "range": "stddev: 2.7625948886681303e-7",
            "extra": "mean: 1.4979481365333471 usec\nrounds: 124420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 557099.630261112,
            "unit": "iter/sec",
            "range": "stddev: 2.479525811873296e-7",
            "extra": "mean: 1.795011063876135 usec\nrounds: 115705"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 921678.8038779489,
            "unit": "iter/sec",
            "range": "stddev: 1.703639472043206e-7",
            "extra": "mean: 1.084976670606415 usec\nrounds: 35529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 873589.9762298521,
            "unit": "iter/sec",
            "range": "stddev: 1.885789435887284e-7",
            "extra": "mean: 1.1447017791065952 usec\nrounds: 136228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 776200.242598564,
            "unit": "iter/sec",
            "range": "stddev: 2.112909333090236e-7",
            "extra": "mean: 1.2883273479175927 usec\nrounds: 131265"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684515.3602254649,
            "unit": "iter/sec",
            "range": "stddev: 2.1549313560180454e-7",
            "extra": "mean: 1.4608875974245794 usec\nrounds: 125584"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 570458.8084635955,
            "unit": "iter/sec",
            "range": "stddev: 2.426326934124125e-7",
            "extra": "mean: 1.7529749478201218 usec\nrounds: 121657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 786508.8075007325,
            "unit": "iter/sec",
            "range": "stddev: 1.4379437309230256e-7",
            "extra": "mean: 1.2714415788650513 usec\nrounds: 3860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 815660.3616728142,
            "unit": "iter/sec",
            "range": "stddev: 1.0357750399749744e-7",
            "extra": "mean: 1.226000486218466 usec\nrounds: 187915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 790275.8598756483,
            "unit": "iter/sec",
            "range": "stddev: 2.196287520896396e-7",
            "extra": "mean: 1.2653809268036509 usec\nrounds: 152912"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 818607.7877560898,
            "unit": "iter/sec",
            "range": "stddev: 1.1259077374450889e-7",
            "extra": "mean: 1.2215862284197538 usec\nrounds: 192290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 821364.0886899752,
            "unit": "iter/sec",
            "range": "stddev: 1.0867918108792444e-7",
            "extra": "mean: 1.2174868779507246 usec\nrounds: 174763"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 775657.6808578202,
            "unit": "iter/sec",
            "range": "stddev: 1.3785391887332263e-7",
            "extra": "mean: 1.289228514947565 usec\nrounds: 18836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 807176.7859139203,
            "unit": "iter/sec",
            "range": "stddev: 1.1119830859054667e-7",
            "extra": "mean: 1.2388859757255741 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 815743.0161688908,
            "unit": "iter/sec",
            "range": "stddev: 1.0960533375726185e-7",
            "extra": "mean: 1.2258762627187 usec\nrounds: 191809"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 820023.4840453828,
            "unit": "iter/sec",
            "range": "stddev: 1.1702999154539729e-7",
            "extra": "mean: 1.2194772704151686 usec\nrounds: 191535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 809901.3789124043,
            "unit": "iter/sec",
            "range": "stddev: 1.0835915163344159e-7",
            "extra": "mean: 1.2347182336482427 usec\nrounds: 53511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 763430.4460958679,
            "unit": "iter/sec",
            "range": "stddev: 1.862313730533137e-7",
            "extra": "mean: 1.309877023000501 usec\nrounds: 20343"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 786466.7181955868,
            "unit": "iter/sec",
            "range": "stddev: 1.2137459135073494e-7",
            "extra": "mean: 1.2715096225487186 usec\nrounds: 180280"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 784604.5633292294,
            "unit": "iter/sec",
            "range": "stddev: 1.3275460621567261e-7",
            "extra": "mean: 1.2745273819933014 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 754316.0683988334,
            "unit": "iter/sec",
            "range": "stddev: 2.3251618278114333e-7",
            "extra": "mean: 1.3257042265090193 usec\nrounds: 180887"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788290.1546158956,
            "unit": "iter/sec",
            "range": "stddev: 1.074505146963765e-7",
            "extra": "mean: 1.2685684251470357 usec\nrounds: 182114"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 744590.2727479994,
            "unit": "iter/sec",
            "range": "stddev: 2.925578525685545e-7",
            "extra": "mean: 1.3430204994612411 usec\nrounds: 28177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788000.9243532477,
            "unit": "iter/sec",
            "range": "stddev: 1.0032942593677105e-7",
            "extra": "mean: 1.2690340443708878 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 785367.0382772865,
            "unit": "iter/sec",
            "range": "stddev: 9.925641203613175e-8",
            "extra": "mean: 1.2732900048791378 usec\nrounds: 181560"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 757238.078859712,
            "unit": "iter/sec",
            "range": "stddev: 2.339185363716153e-7",
            "extra": "mean: 1.320588633770044 usec\nrounds: 187259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 790781.6179894939,
            "unit": "iter/sec",
            "range": "stddev: 1.0889919566615578e-7",
            "extra": "mean: 1.264571630461554 usec\nrounds: 184873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 730000.298463436,
            "unit": "iter/sec",
            "range": "stddev: 2.1699614936309254e-7",
            "extra": "mean: 1.3698624536248565 usec\nrounds: 25834"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 743059.4905820785,
            "unit": "iter/sec",
            "range": "stddev: 1.1507066482946612e-7",
            "extra": "mean: 1.3457872655884473 usec\nrounds: 172406"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 711709.5927494905,
            "unit": "iter/sec",
            "range": "stddev: 2.288502825990453e-7",
            "extra": "mean: 1.4050674744129557 usec\nrounds: 193467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 710370.1829993845,
            "unit": "iter/sec",
            "range": "stddev: 2.426111047253646e-7",
            "extra": "mean: 1.407716742526715 usec\nrounds: 194308"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 704542.8497196891,
            "unit": "iter/sec",
            "range": "stddev: 2.2784208447192737e-7",
            "extra": "mean: 1.4193600863281233 usec\nrounds: 189440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71763.18120451803,
            "unit": "iter/sec",
            "range": "stddev: 0.000003870388599914192",
            "extra": "mean: 13.93472227980109 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59547.13810506025,
            "unit": "iter/sec",
            "range": "stddev: 8.937782612309393e-7",
            "extra": "mean: 16.793418320720626 usec\nrounds: 18808"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98901461+nils-borrmann-y42@users.noreply.github.com",
            "name": "Nils Borrmann",
            "username": "nils-borrmann-y42"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c853bda8fa83cd9a642c7adfe2f8ac6c10e9d074",
          "message": "Relax version of backoff dependency (#2975)",
          "timestamp": "2024-02-02T21:51:12Z",
          "tree_id": "eb27a8d77ca8cb3cf37062f825423d00209d0b31",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c853bda8fa83cd9a642c7adfe2f8ac6c10e9d074"
        },
        "date": 1706962466015,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 874370.400798657,
            "unit": "iter/sec",
            "range": "stddev: 2.1159147712672273e-7",
            "extra": "mean: 1.1436800686374928 usec\nrounds: 32471"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 840243.8224335081,
            "unit": "iter/sec",
            "range": "stddev: 1.948479330545194e-7",
            "extra": "mean: 1.1901307374135845 usec\nrounds: 93925"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 750963.153501304,
            "unit": "iter/sec",
            "range": "stddev: 2.8067019920081713e-7",
            "extra": "mean: 1.3316232565307393 usec\nrounds: 117839"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 662485.3735092856,
            "unit": "iter/sec",
            "range": "stddev: 2.5813634856892243e-7",
            "extra": "mean: 1.5094672878630484 usec\nrounds: 119518"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 557428.6834092875,
            "unit": "iter/sec",
            "range": "stddev: 2.945408861753727e-7",
            "extra": "mean: 1.7939514591963652 usec\nrounds: 106185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 880604.4659128329,
            "unit": "iter/sec",
            "range": "stddev: 1.6267611354840868e-7",
            "extra": "mean: 1.1355836118357654 usec\nrounds: 51400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 837987.6496172289,
            "unit": "iter/sec",
            "range": "stddev: 2.495681146414141e-7",
            "extra": "mean: 1.1933350097185491 usec\nrounds: 129211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 749997.9106646666,
            "unit": "iter/sec",
            "range": "stddev: 2.6154676492475836e-7",
            "extra": "mean: 1.333337047717607 usec\nrounds: 131587"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 662250.7651690586,
            "unit": "iter/sec",
            "range": "stddev: 2.6702409100452155e-7",
            "extra": "mean: 1.5100020303407595 usec\nrounds: 124941"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 553262.13922061,
            "unit": "iter/sec",
            "range": "stddev: 2.370197328658991e-7",
            "extra": "mean: 1.8074614709922447 usec\nrounds: 117503"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 864925.5765736605,
            "unit": "iter/sec",
            "range": "stddev: 2.885008480558795e-7",
            "extra": "mean: 1.1561688393600602 usec\nrounds: 34622"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 844796.2395549255,
            "unit": "iter/sec",
            "range": "stddev: 2.2954133475791227e-7",
            "extra": "mean: 1.1837173902748932 usec\nrounds: 138870"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 750524.7513214312,
            "unit": "iter/sec",
            "range": "stddev: 2.1707453421267648e-7",
            "extra": "mean: 1.3324010943534155 usec\nrounds: 128562"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 666243.5410963796,
            "unit": "iter/sec",
            "range": "stddev: 2.4827887889523394e-7",
            "extra": "mean: 1.5009526371608588 usec\nrounds: 133186"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 561635.1029641746,
            "unit": "iter/sec",
            "range": "stddev: 2.4081203228776865e-7",
            "extra": "mean: 1.7805154890109989 usec\nrounds: 119838"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 764802.8238555423,
            "unit": "iter/sec",
            "range": "stddev: 1.0144638379635852e-7",
            "extra": "mean: 1.3075265529993418 usec\nrounds: 3811"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 804273.5347478364,
            "unit": "iter/sec",
            "range": "stddev: 1.1520900510186858e-7",
            "extra": "mean: 1.2433580825378392 usec\nrounds: 185001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 759067.5323395872,
            "unit": "iter/sec",
            "range": "stddev: 2.3385976123355413e-7",
            "extra": "mean: 1.3174058399228514 usec\nrounds: 141992"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 803871.4860221453,
            "unit": "iter/sec",
            "range": "stddev: 1.2111917943493842e-7",
            "extra": "mean: 1.2439799363308326 usec\nrounds: 187455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 804018.0982079876,
            "unit": "iter/sec",
            "range": "stddev: 1.2412533957720358e-7",
            "extra": "mean: 1.2437530973852715 usec\nrounds: 193259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 752274.719523121,
            "unit": "iter/sec",
            "range": "stddev: 3.7830780185272995e-7",
            "extra": "mean: 1.329301615550654 usec\nrounds: 18305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 759451.952514666,
            "unit": "iter/sec",
            "range": "stddev: 2.3082976743891636e-7",
            "extra": "mean: 1.316738994071766 usec\nrounds: 196585"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 808979.6687910898,
            "unit": "iter/sec",
            "range": "stddev: 1.1157856041703183e-7",
            "extra": "mean: 1.2361250085485638 usec\nrounds: 185448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 805363.9018785501,
            "unit": "iter/sec",
            "range": "stddev: 1.2054284763445126e-7",
            "extra": "mean: 1.2416747232741023 usec\nrounds: 187849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 804713.8437592661,
            "unit": "iter/sec",
            "range": "stddev: 1.241260205400483e-7",
            "extra": "mean: 1.2426777639719029 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 740440.2243366303,
            "unit": "iter/sec",
            "range": "stddev: 2.6320267939768716e-7",
            "extra": "mean: 1.3505479134334073 usec\nrounds: 28087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 742238.323337279,
            "unit": "iter/sec",
            "range": "stddev: 2.684412212834384e-7",
            "extra": "mean: 1.3472761625993164 usec\nrounds: 190448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 785855.5403701462,
            "unit": "iter/sec",
            "range": "stddev: 1.1150388873035317e-7",
            "extra": "mean: 1.2724985046602708 usec\nrounds: 183735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 785554.3579840361,
            "unit": "iter/sec",
            "range": "stddev: 1.1510477740197982e-7",
            "extra": "mean: 1.27298638195617 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 784577.2351027618,
            "unit": "iter/sec",
            "range": "stddev: 1.2289494096746217e-7",
            "extra": "mean: 1.2745717760585071 usec\nrounds: 179496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 744801.9715436851,
            "unit": "iter/sec",
            "range": "stddev: 2.074959755864309e-7",
            "extra": "mean: 1.3426387660164065 usec\nrounds: 27782"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 784562.2273150955,
            "unit": "iter/sec",
            "range": "stddev: 1.2193053838815494e-7",
            "extra": "mean: 1.274596157174389 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 786910.2525177646,
            "unit": "iter/sec",
            "range": "stddev: 1.1549193756686598e-7",
            "extra": "mean: 1.270792948497548 usec\nrounds: 179316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 786875.3765539258,
            "unit": "iter/sec",
            "range": "stddev: 1.150532620949712e-7",
            "extra": "mean: 1.2708492727011498 usec\nrounds: 183860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 784690.8681732051,
            "unit": "iter/sec",
            "range": "stddev: 1.1678316696448035e-7",
            "extra": "mean: 1.2743872020940477 usec\nrounds: 182672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 711284.1074491631,
            "unit": "iter/sec",
            "range": "stddev: 2.3276130847960298e-7",
            "extra": "mean: 1.4059079761900517 usec\nrounds: 25543"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 711481.6661579581,
            "unit": "iter/sec",
            "range": "stddev: 2.519339811102556e-7",
            "extra": "mean: 1.405517594571421 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 701710.449812004,
            "unit": "iter/sec",
            "range": "stddev: 2.388299205921292e-7",
            "extra": "mean: 1.4250892234366912 usec\nrounds: 192634"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 700712.7548054786,
            "unit": "iter/sec",
            "range": "stddev: 2.8217355747648004e-7",
            "extra": "mean: 1.4271183065271948 usec\nrounds: 192152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 701723.6527338315,
            "unit": "iter/sec",
            "range": "stddev: 2.616995445000431e-7",
            "extra": "mean: 1.4250624104006178 usec\nrounds: 191467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67138.97780622191,
            "unit": "iter/sec",
            "range": "stddev: 0.000006023954057377315",
            "extra": "mean: 14.894477584782768 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59300.32829722624,
            "unit": "iter/sec",
            "range": "stddev: 9.221168959873943e-7",
            "extra": "mean: 16.86331304925971 usec\nrounds: 23616"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98901461+nils-borrmann-y42@users.noreply.github.com",
            "name": "Nils Borrmann",
            "username": "nils-borrmann-y42"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c853bda8fa83cd9a642c7adfe2f8ac6c10e9d074",
          "message": "Relax version of backoff dependency (#2975)",
          "timestamp": "2024-02-02T21:51:12Z",
          "tree_id": "eb27a8d77ca8cb3cf37062f825423d00209d0b31",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c853bda8fa83cd9a642c7adfe2f8ac6c10e9d074"
        },
        "date": 1706962525113,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 918288.8803918273,
            "unit": "iter/sec",
            "range": "stddev: 1.6502634346620202e-7",
            "extra": "mean: 1.088981932976589 usec\nrounds: 32605"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 871130.9790924172,
            "unit": "iter/sec",
            "range": "stddev: 2.1833657598171801e-7",
            "extra": "mean: 1.147933002040456 usec\nrounds: 99384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 787544.4952667452,
            "unit": "iter/sec",
            "range": "stddev: 1.8629997326254461e-7",
            "extra": "mean: 1.269769525417475 usec\nrounds: 112434"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682048.5762798737,
            "unit": "iter/sec",
            "range": "stddev: 2.2256791530347403e-7",
            "extra": "mean: 1.466171229994119 usec\nrounds: 121740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569641.9827973326,
            "unit": "iter/sec",
            "range": "stddev: 2.8230298032699203e-7",
            "extra": "mean: 1.7554885879185282 usec\nrounds: 110445"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 922500.821844849,
            "unit": "iter/sec",
            "range": "stddev: 1.8550945931600456e-7",
            "extra": "mean: 1.0840098743762259 usec\nrounds: 52910"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 878061.5955661143,
            "unit": "iter/sec",
            "range": "stddev: 2.431321356717798e-7",
            "extra": "mean: 1.138872267104756 usec\nrounds: 139738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 781204.4918075545,
            "unit": "iter/sec",
            "range": "stddev: 1.963547782021523e-7",
            "extra": "mean: 1.2800745649659484 usec\nrounds: 134285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679397.494388101,
            "unit": "iter/sec",
            "range": "stddev: 2.1941827625113236e-7",
            "extra": "mean: 1.471892387387518 usec\nrounds: 131105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570567.7997273211,
            "unit": "iter/sec",
            "range": "stddev: 2.707007385980531e-7",
            "extra": "mean: 1.7526400902362664 usec\nrounds: 124854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 936283.4094958237,
            "unit": "iter/sec",
            "range": "stddev: 1.318947655575197e-7",
            "extra": "mean: 1.0680526749250925 usec\nrounds: 33990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883322.683828006,
            "unit": "iter/sec",
            "range": "stddev: 1.684159234079302e-7",
            "extra": "mean: 1.1320891202140944 usec\nrounds: 137730"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 791463.7253097871,
            "unit": "iter/sec",
            "range": "stddev: 2.241633930768234e-7",
            "extra": "mean: 1.2634817844729267 usec\nrounds: 123646"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 691695.861634258,
            "unit": "iter/sec",
            "range": "stddev: 2.0788611398268813e-7",
            "extra": "mean: 1.4457221091901824 usec\nrounds: 132202"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 573616.8172961769,
            "unit": "iter/sec",
            "range": "stddev: 2.3206569202022201e-7",
            "extra": "mean: 1.7433240620692396 usec\nrounds: 122574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 780816.3771909444,
            "unit": "iter/sec",
            "range": "stddev: 2.9267496739472096e-7",
            "extra": "mean: 1.2807108421541924 usec\nrounds: 3881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 816333.7227114529,
            "unit": "iter/sec",
            "range": "stddev: 1.0370415683103223e-7",
            "extra": "mean: 1.2249892074512119 usec\nrounds: 191809"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 789178.8736275588,
            "unit": "iter/sec",
            "range": "stddev: 2.3215671120532104e-7",
            "extra": "mean: 1.2671398505681934 usec\nrounds: 156068"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805228.6264263336,
            "unit": "iter/sec",
            "range": "stddev: 1.0851810281156513e-7",
            "extra": "mean: 1.241883320067838 usec\nrounds: 192152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 811509.4935734292,
            "unit": "iter/sec",
            "range": "stddev: 1.2203191195701442e-7",
            "extra": "mean: 1.2322714742332406 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 769412.5703726381,
            "unit": "iter/sec",
            "range": "stddev: 2.5045712182412787e-7",
            "extra": "mean: 1.2996928286675704 usec\nrounds: 19147"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 813601.5505655127,
            "unit": "iter/sec",
            "range": "stddev: 1.116679529000999e-7",
            "extra": "mean: 1.2291028689718286 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 819933.2411596078,
            "unit": "iter/sec",
            "range": "stddev: 9.641350747729295e-8",
            "extra": "mean: 1.2196114876202957 usec\nrounds: 188046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 797774.1951315546,
            "unit": "iter/sec",
            "range": "stddev: 1.0416851424727037e-7",
            "extra": "mean: 1.2534875232898428 usec\nrounds: 189976"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 787793.6609768014,
            "unit": "iter/sec",
            "range": "stddev: 2.690081378429101e-7",
            "extra": "mean: 1.2693679189549198 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 759282.6300466112,
            "unit": "iter/sec",
            "range": "stddev: 2.6106513447885803e-7",
            "extra": "mean: 1.317032631101559 usec\nrounds: 29408"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 788007.3352922568,
            "unit": "iter/sec",
            "range": "stddev: 1.052378532281457e-7",
            "extra": "mean: 1.2690237199747882 usec\nrounds: 178600"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 783667.4720140905,
            "unit": "iter/sec",
            "range": "stddev: 1.1150718354511108e-7",
            "extra": "mean: 1.276051432158996 usec\nrounds: 181498"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 757238.9731169542,
            "unit": "iter/sec",
            "range": "stddev: 2.6027000674041994e-7",
            "extra": "mean: 1.3205870742280876 usec\nrounds: 198842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 794497.9962213989,
            "unit": "iter/sec",
            "range": "stddev: 1.134844143512804e-7",
            "extra": "mean: 1.2586564154421538 usec\nrounds: 178779"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 753496.0948550323,
            "unit": "iter/sec",
            "range": "stddev: 2.1467056483410996e-7",
            "extra": "mean: 1.3271468914412798 usec\nrounds: 27507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788891.0618473745,
            "unit": "iter/sec",
            "range": "stddev: 1.2159709789259838e-7",
            "extra": "mean: 1.2676021422504955 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 789647.844166229,
            "unit": "iter/sec",
            "range": "stddev: 1.1827657423560976e-7",
            "extra": "mean: 1.2663872983226807 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 752246.4117134392,
            "unit": "iter/sec",
            "range": "stddev: 2.602412798677462e-7",
            "extra": "mean: 1.3293516385438606 usec\nrounds: 148883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 789155.1452047583,
            "unit": "iter/sec",
            "range": "stddev: 1.1438207364853919e-7",
            "extra": "mean: 1.2671779510992542 usec\nrounds: 181192"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 733623.2348680291,
            "unit": "iter/sec",
            "range": "stddev: 2.357976881172611e-7",
            "extra": "mean: 1.3630975035569712 usec\nrounds: 26568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 725259.3624809376,
            "unit": "iter/sec",
            "range": "stddev: 2.2041237474232963e-7",
            "extra": "mean: 1.378817084938057 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 751991.6200670939,
            "unit": "iter/sec",
            "range": "stddev: 1.226840878132878e-7",
            "extra": "mean: 1.3298020527286971 usec\nrounds: 158323"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 717188.0517789016,
            "unit": "iter/sec",
            "range": "stddev: 2.2530927184561602e-7",
            "extra": "mean: 1.3943344392305703 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 718248.0204354508,
            "unit": "iter/sec",
            "range": "stddev: 2.3078505629660352e-7",
            "extra": "mean: 1.3922767227311423 usec\nrounds: 195439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71288.13065993892,
            "unit": "iter/sec",
            "range": "stddev: 0.000003921793112135802",
            "extra": "mean: 14.027580618858337 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57872.37551862735,
            "unit": "iter/sec",
            "range": "stddev: 9.120625534983279e-7",
            "extra": "mean: 17.2794012866835 usec\nrounds: 23866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d859610f32ee2eb94acb4ec03e8cb3b2b47bb2a",
          "message": "Drop support for 3.7 (#3668)\n\n* Drop support for 3.7\r\n\r\nFixes #3667\r\n\r\n* Remove 37",
          "timestamp": "2024-02-03T11:55:26-06:00",
          "tree_id": "cc52c25c8233534b23ffadd5ad80707a6cf9a15b",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5d859610f32ee2eb94acb4ec03e8cb3b2b47bb2a"
        },
        "date": 1707021830606,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 898345.0637001795,
            "unit": "iter/sec",
            "range": "stddev: 1.0470392993210916e-7",
            "extra": "mean: 1.1131580062132425 usec\nrounds: 32897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 860050.6828106543,
            "unit": "iter/sec",
            "range": "stddev: 1.0594815388644279e-7",
            "extra": "mean: 1.16272217438627 usec\nrounds: 85476"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767933.5415855426,
            "unit": "iter/sec",
            "range": "stddev: 1.2803838876331846e-7",
            "extra": "mean: 1.3021960180763985 usec\nrounds: 111709"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 662621.5798760363,
            "unit": "iter/sec",
            "range": "stddev: 1.6971570027038102e-7",
            "extra": "mean: 1.5091570066086297 usec\nrounds: 115830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 562530.7229069679,
            "unit": "iter/sec",
            "range": "stddev: 1.3789539294022907e-7",
            "extra": "mean: 1.7776806835230963 usec\nrounds: 114741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 913325.355214541,
            "unit": "iter/sec",
            "range": "stddev: 1.2703479235662254e-7",
            "extra": "mean: 1.0949000750834286 usec\nrounds: 53795"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 874426.9342624617,
            "unit": "iter/sec",
            "range": "stddev: 1.0511520314235937e-7",
            "extra": "mean: 1.143606127415841 usec\nrounds: 131169"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 771125.1974375529,
            "unit": "iter/sec",
            "range": "stddev: 1.302009427061085e-7",
            "extra": "mean: 1.2968062816816226 usec\nrounds: 118228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 667034.2718978848,
            "unit": "iter/sec",
            "range": "stddev: 1.3572632730979367e-7",
            "extra": "mean: 1.4991733440543342 usec\nrounds: 123618"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 566405.1209513753,
            "unit": "iter/sec",
            "range": "stddev: 1.6684344245280107e-7",
            "extra": "mean: 1.7655207606886163 usec\nrounds: 111965"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928263.6706949471,
            "unit": "iter/sec",
            "range": "stddev: 1.1642155161655591e-7",
            "extra": "mean: 1.0772801215535532 usec\nrounds: 36863"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 882412.1464008928,
            "unit": "iter/sec",
            "range": "stddev: 8.99554796507001e-8",
            "extra": "mean: 1.1332572926140176 usec\nrounds: 123732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 787262.1860266202,
            "unit": "iter/sec",
            "range": "stddev: 9.991830179760856e-8",
            "extra": "mean: 1.2702248599632173 usec\nrounds: 129836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 688888.8895724963,
            "unit": "iter/sec",
            "range": "stddev: 9.401384707144483e-8",
            "extra": "mean: 1.4516129017853228 usec\nrounds: 114938"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 572020.480865588,
            "unit": "iter/sec",
            "range": "stddev: 1.4316980396756955e-7",
            "extra": "mean: 1.7481891530995333 usec\nrounds: 117272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 775370.6772342796,
            "unit": "iter/sec",
            "range": "stddev: 2.3402053642107343e-7",
            "extra": "mean: 1.2897057231606506 usec\nrounds: 3936"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 813127.6151012924,
            "unit": "iter/sec",
            "range": "stddev: 6.367532549491853e-8",
            "extra": "mean: 1.229819257676335 usec\nrounds: 185001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 783248.4985585657,
            "unit": "iter/sec",
            "range": "stddev: 1.7534349236943077e-7",
            "extra": "mean: 1.2767340146075328 usec\nrounds: 151402"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 814532.6128684713,
            "unit": "iter/sec",
            "range": "stddev: 8.796452994992504e-8",
            "extra": "mean: 1.227697926640879 usec\nrounds: 187981"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 781131.9882287966,
            "unit": "iter/sec",
            "range": "stddev: 1.6410825535505035e-7",
            "extra": "mean: 1.2801933796969227 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 780760.7940888244,
            "unit": "iter/sec",
            "range": "stddev: 1.8575914236582805e-7",
            "extra": "mean: 1.2808020171748449 usec\nrounds: 18369"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 817538.7347845392,
            "unit": "iter/sec",
            "range": "stddev: 7.77809738471812e-8",
            "extra": "mean: 1.2231836333278425 usec\nrounds: 185641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 807971.2084149952,
            "unit": "iter/sec",
            "range": "stddev: 7.204219274386707e-8",
            "extra": "mean: 1.2376678643806003 usec\nrounds: 187915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 820586.9556158519,
            "unit": "iter/sec",
            "range": "stddev: 7.082843670662379e-8",
            "extra": "mean: 1.218639893257258 usec\nrounds: 191809"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 822057.8385026208,
            "unit": "iter/sec",
            "range": "stddev: 7.840104839630568e-8",
            "extra": "mean: 1.2164594182588186 usec\nrounds: 197962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 773146.3588300216,
            "unit": "iter/sec",
            "range": "stddev: 1.2518716852938751e-7",
            "extra": "mean: 1.2934161670414759 usec\nrounds: 29805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 801077.1284811082,
            "unit": "iter/sec",
            "range": "stddev: 8.453362147630332e-8",
            "extra": "mean: 1.2483192497282525 usec\nrounds: 187718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 799385.5532484988,
            "unit": "iter/sec",
            "range": "stddev: 9.695985825723885e-8",
            "extra": "mean: 1.2509608110082242 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 767453.6772480834,
            "unit": "iter/sec",
            "range": "stddev: 1.74517203928094e-7",
            "extra": "mean: 1.3030102397655783 usec\nrounds: 199210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 799971.9468877107,
            "unit": "iter/sec",
            "range": "stddev: 1.0913422217960425e-7",
            "extra": "mean: 1.2500438345250706 usec\nrounds: 179316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 770138.744769617,
            "unit": "iter/sec",
            "range": "stddev: 2.2615666163507112e-7",
            "extra": "mean: 1.2984673304537415 usec\nrounds: 27602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 801031.0527810928,
            "unit": "iter/sec",
            "range": "stddev: 7.273912340443552e-8",
            "extra": "mean: 1.2483910536652838 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 803353.2983526818,
            "unit": "iter/sec",
            "range": "stddev: 7.034918456572581e-8",
            "extra": "mean: 1.2447823417798278 usec\nrounds: 182983"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 803047.7691533316,
            "unit": "iter/sec",
            "range": "stddev: 7.542756629679743e-8",
            "extra": "mean: 1.2452559342196028 usec\nrounds: 178482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 798225.2759867841,
            "unit": "iter/sec",
            "range": "stddev: 8.098605948800253e-8",
            "extra": "mean: 1.2527791715988665 usec\nrounds: 184810"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 734794.0160701827,
            "unit": "iter/sec",
            "range": "stddev: 1.5609303338350534e-7",
            "extra": "mean: 1.3609256174243076 usec\nrounds: 25149"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 752931.5733017143,
            "unit": "iter/sec",
            "range": "stddev: 7.808577225949219e-8",
            "extra": "mean: 1.3281419393994263 usec\nrounds: 170328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 724792.9284623347,
            "unit": "iter/sec",
            "range": "stddev: 1.7799154131041312e-7",
            "extra": "mean: 1.3797044103638314 usec\nrounds: 191262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 745416.7617502767,
            "unit": "iter/sec",
            "range": "stddev: 9.022620719556295e-8",
            "extra": "mean: 1.3415314107667053 usec\nrounds: 199210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 722296.4892576615,
            "unit": "iter/sec",
            "range": "stddev: 1.7699165238853e-7",
            "extra": "mean: 1.3844730174830944 usec\nrounds: 184619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66968.38734373599,
            "unit": "iter/sec",
            "range": "stddev: 0.000006321318039903383",
            "extra": "mean: 14.932418707758188 usec\nrounds: 32"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57717.990755703955,
            "unit": "iter/sec",
            "range": "stddev: 7.160464970875942e-7",
            "extra": "mean: 17.325620433195265 usec\nrounds: 22825"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d859610f32ee2eb94acb4ec03e8cb3b2b47bb2a",
          "message": "Drop support for 3.7 (#3668)\n\n* Drop support for 3.7\r\n\r\nFixes #3667\r\n\r\n* Remove 37",
          "timestamp": "2024-02-03T11:55:26-06:00",
          "tree_id": "cc52c25c8233534b23ffadd5ad80707a6cf9a15b",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5d859610f32ee2eb94acb4ec03e8cb3b2b47bb2a"
        },
        "date": 1707021884721,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 918598.2165696115,
            "unit": "iter/sec",
            "range": "stddev: 1.2184247109448523e-7",
            "extra": "mean: 1.0886152204109139 usec\nrounds: 34005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 860438.4009521866,
            "unit": "iter/sec",
            "range": "stddev: 1.8095932110298494e-7",
            "extra": "mean: 1.1621982455610658 usec\nrounds: 98491"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 760908.7476930171,
            "unit": "iter/sec",
            "range": "stddev: 1.896960835501267e-7",
            "extra": "mean: 1.3142180360416127 usec\nrounds: 118567"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 679691.7953536985,
            "unit": "iter/sec",
            "range": "stddev: 2.2686307199935012e-7",
            "extra": "mean: 1.4712550700713096 usec\nrounds: 116206"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565798.4757489779,
            "unit": "iter/sec",
            "range": "stddev: 2.039882009908109e-7",
            "extra": "mean: 1.7674137398059377 usec\nrounds: 107353"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915764.0162412638,
            "unit": "iter/sec",
            "range": "stddev: 2.1847791657936603e-7",
            "extra": "mean: 1.0919843783603567 usec\nrounds: 50171"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 869293.4114043149,
            "unit": "iter/sec",
            "range": "stddev: 2.1892377558994088e-7",
            "extra": "mean: 1.150359575812881 usec\nrounds: 134051"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 777745.234808193,
            "unit": "iter/sec",
            "range": "stddev: 3.108317044513731e-7",
            "extra": "mean: 1.2857680834863865 usec\nrounds: 135198"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 682082.2261509225,
            "unit": "iter/sec",
            "range": "stddev: 2.4470283076862317e-7",
            "extra": "mean: 1.466098897845687 usec\nrounds: 114962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 565039.1556034677,
            "unit": "iter/sec",
            "range": "stddev: 2.521845123217273e-7",
            "extra": "mean: 1.769788854600686 usec\nrounds: 116458"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 924263.6033110861,
            "unit": "iter/sec",
            "range": "stddev: 1.7624264575883051e-7",
            "extra": "mean: 1.0819424203415513 usec\nrounds: 35150"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 868027.1463786593,
            "unit": "iter/sec",
            "range": "stddev: 1.4878332925111935e-7",
            "extra": "mean: 1.1520377031662214 usec\nrounds: 135642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 772506.1650298685,
            "unit": "iter/sec",
            "range": "stddev: 2.036542511343504e-7",
            "extra": "mean: 1.2944880510582535 usec\nrounds: 128500"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 685041.1285561527,
            "unit": "iter/sec",
            "range": "stddev: 2.2992496844644e-7",
            "extra": "mean: 1.4597663677620052 usec\nrounds: 128500"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 565997.7557067282,
            "unit": "iter/sec",
            "range": "stddev: 2.7779588872404284e-7",
            "extra": "mean: 1.7667914579473176 usec\nrounds: 122967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 782980.9512210056,
            "unit": "iter/sec",
            "range": "stddev: 1.6733744388262533e-7",
            "extra": "mean: 1.277170279098831 usec\nrounds: 3930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 813232.8020290816,
            "unit": "iter/sec",
            "range": "stddev: 9.26405287506415e-8",
            "extra": "mean: 1.2296601877161362 usec\nrounds: 187521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 785300.7247793669,
            "unit": "iter/sec",
            "range": "stddev: 2.3270261720929787e-7",
            "extra": "mean: 1.2733975258725931 usec\nrounds: 121906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 812432.3279454258,
            "unit": "iter/sec",
            "range": "stddev: 1.0350684331289535e-7",
            "extra": "mean: 1.2308717484555511 usec\nrounds: 191809"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 808957.091970077,
            "unit": "iter/sec",
            "range": "stddev: 1.1065792649143095e-7",
            "extra": "mean: 1.2361595070075604 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 764369.3750504213,
            "unit": "iter/sec",
            "range": "stddev: 3.7628881645706304e-7",
            "extra": "mean: 1.3082680084272547 usec\nrounds: 19060"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 813480.1710338808,
            "unit": "iter/sec",
            "range": "stddev: 1.2283232866391424e-7",
            "extra": "mean: 1.2292862636455717 usec\nrounds: 185256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 819426.8788795655,
            "unit": "iter/sec",
            "range": "stddev: 1.2306706646570136e-7",
            "extra": "mean: 1.2203651427291953 usec\nrounds: 192704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 814674.8992550069,
            "unit": "iter/sec",
            "range": "stddev: 1.0506986093354827e-7",
            "extra": "mean: 1.2274835040510843 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 817665.5311735895,
            "unit": "iter/sec",
            "range": "stddev: 1.1797228999731194e-7",
            "extra": "mean: 1.2229939527531595 usec\nrounds: 194448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 774038.8530016006,
            "unit": "iter/sec",
            "range": "stddev: 2.2150843538143168e-7",
            "extra": "mean: 1.2919248124589067 usec\nrounds: 28910"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 757172.4726696883,
            "unit": "iter/sec",
            "range": "stddev: 2.1217415053693153e-7",
            "extra": "mean: 1.3207030578834102 usec\nrounds: 193050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 765182.9226887099,
            "unit": "iter/sec",
            "range": "stddev: 2.7081148761619346e-7",
            "extra": "mean: 1.3068770490671522 usec\nrounds: 198474"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 796078.3951163313,
            "unit": "iter/sec",
            "range": "stddev: 1.042557340991153e-7",
            "extra": "mean: 1.2561576926778293 usec\nrounds: 183735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 762191.8532397128,
            "unit": "iter/sec",
            "range": "stddev: 2.558109680475772e-7",
            "extra": "mean: 1.3120056266010698 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 762948.488922267,
            "unit": "iter/sec",
            "range": "stddev: 2.3163116410023412e-7",
            "extra": "mean: 1.3107044768023453 usec\nrounds: 26766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 786036.6401208243,
            "unit": "iter/sec",
            "range": "stddev: 1.0452891187806178e-7",
            "extra": "mean: 1.272205326009086 usec\nrounds: 180219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 788922.6759473581,
            "unit": "iter/sec",
            "range": "stddev: 1.1217213225302721e-7",
            "extra": "mean: 1.2675513462699939 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 755125.8194838093,
            "unit": "iter/sec",
            "range": "stddev: 2.3442617393703158e-7",
            "extra": "mean: 1.324282621780278 usec\nrounds: 191398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 786083.3553993844,
            "unit": "iter/sec",
            "range": "stddev: 1.3189872309168076e-7",
            "extra": "mean: 1.272129721525437 usec\nrounds: 179137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 716470.2136148411,
            "unit": "iter/sec",
            "range": "stddev: 2.7934091574959117e-7",
            "extra": "mean: 1.3957314358606099 usec\nrounds: 25097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 730032.9468824429,
            "unit": "iter/sec",
            "range": "stddev: 2.173363269149871e-7",
            "extra": "mean: 1.3698011908509518 usec\nrounds: 199358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 747482.7840971889,
            "unit": "iter/sec",
            "range": "stddev: 1.0477363926221486e-7",
            "extra": "mean: 1.3378234539646314 usec\nrounds: 177010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 717909.0355231777,
            "unit": "iter/sec",
            "range": "stddev: 2.61244690341074e-7",
            "extra": "mean: 1.392934133042702 usec\nrounds: 197162"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 741341.3332807777,
            "unit": "iter/sec",
            "range": "stddev: 1.1918787870825941e-7",
            "extra": "mean: 1.3489063068621012 usec\nrounds: 164634"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71816.37283285028,
            "unit": "iter/sec",
            "range": "stddev: 0.00000416731267697771",
            "extra": "mean: 13.924401366349423 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59512.17085917491,
            "unit": "iter/sec",
            "range": "stddev: 8.083159699442946e-7",
            "extra": "mean: 16.80328553912651 usec\nrounds: 22609"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d270d4172cba38937b45f0b058fae0cc3ce26210",
          "message": "Update proto version in README (#3666)\n\nFixes #3665",
          "timestamp": "2024-02-03T12:22:26-06:00",
          "tree_id": "d8c035a64fd91bdb6a4d0cda4b871a02e1cf6455",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d270d4172cba38937b45f0b058fae0cc3ce26210"
        },
        "date": 1707021941136,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 921738.0648122327,
            "unit": "iter/sec",
            "range": "stddev: 1.4549259704998962e-7",
            "extra": "mean: 1.0849069146381733 usec\nrounds: 31442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 884682.7587057328,
            "unit": "iter/sec",
            "range": "stddev: 1.224799406514462e-7",
            "extra": "mean: 1.1303486929743871 usec\nrounds: 95563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 786119.9610000255,
            "unit": "iter/sec",
            "range": "stddev: 1.0570654331413177e-7",
            "extra": "mean: 1.272070484926877 usec\nrounds: 115830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 686623.6046372473,
            "unit": "iter/sec",
            "range": "stddev: 1.6834657171407696e-7",
            "extra": "mean: 1.4564020130480568 usec\nrounds: 114619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570272.8177746657,
            "unit": "iter/sec",
            "range": "stddev: 4.798147406819618e-7",
            "extra": "mean: 1.753546668947378 usec\nrounds: 89853"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 930636.2944710543,
            "unit": "iter/sec",
            "range": "stddev: 1.0366126521176586e-7",
            "extra": "mean: 1.0745336346121874 usec\nrounds: 48411"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 882040.9886992315,
            "unit": "iter/sec",
            "range": "stddev: 1.259187885582478e-7",
            "extra": "mean: 1.133734160670612 usec\nrounds: 135062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 783289.6837046823,
            "unit": "iter/sec",
            "range": "stddev: 9.440902384366052e-8",
            "extra": "mean: 1.2766668843005244 usec\nrounds: 133484"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 684261.557462982,
            "unit": "iter/sec",
            "range": "stddev: 1.3472584292699603e-7",
            "extra": "mean: 1.461429462306304 usec\nrounds: 124449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568550.7057428295,
            "unit": "iter/sec",
            "range": "stddev: 3.8834979632256207e-7",
            "extra": "mean: 1.7588580752766254 usec\nrounds: 120591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 919983.5013466383,
            "unit": "iter/sec",
            "range": "stddev: 1.298874136698444e-7",
            "extra": "mean: 1.0869760148266099 usec\nrounds: 35256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880747.009605014,
            "unit": "iter/sec",
            "range": "stddev: 2.4651732009610815e-7",
            "extra": "mean: 1.1353998243473653 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 787044.152257153,
            "unit": "iter/sec",
            "range": "stddev: 1.0019093502770579e-7",
            "extra": "mean: 1.270576748626 usec\nrounds: 104858"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 696440.4116988867,
            "unit": "iter/sec",
            "range": "stddev: 1.1278045439770835e-7",
            "extra": "mean: 1.4358730240260102 usec\nrounds: 116332"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 571437.7213622623,
            "unit": "iter/sec",
            "range": "stddev: 1.4434884225168716e-7",
            "extra": "mean: 1.7499719787767587 usec\nrounds: 114668"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 767866.4597504938,
            "unit": "iter/sec",
            "range": "stddev: 1.4596892366696196e-7",
            "extra": "mean: 1.3023097796522256 usec\nrounds: 3948"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 802249.3762783853,
            "unit": "iter/sec",
            "range": "stddev: 8.974846105917491e-8",
            "extra": "mean: 1.246495204071052 usec\nrounds: 196729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 755286.8244475276,
            "unit": "iter/sec",
            "range": "stddev: 1.6651314388906287e-7",
            "extra": "mean: 1.3240003236273499 usec\nrounds: 144671"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 814779.6563596035,
            "unit": "iter/sec",
            "range": "stddev: 6.037502638225522e-8",
            "extra": "mean: 1.2273256851649341 usec\nrounds: 190111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 813415.092511389,
            "unit": "iter/sec",
            "range": "stddev: 7.069149759596415e-8",
            "extra": "mean: 1.2293846145791774 usec\nrounds: 190854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 769397.1471300581,
            "unit": "iter/sec",
            "range": "stddev: 1.3019522188343135e-7",
            "extra": "mean: 1.2997188821535375 usec\nrounds: 18849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 804666.057270551,
            "unit": "iter/sec",
            "range": "stddev: 7.761294725926604e-8",
            "extra": "mean: 1.242751562545122 usec\nrounds: 190990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 805116.9917448969,
            "unit": "iter/sec",
            "range": "stddev: 6.36128153018389e-8",
            "extra": "mean: 1.2420555152273476 usec\nrounds: 192427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 752947.0656866663,
            "unit": "iter/sec",
            "range": "stddev: 2.450060799067568e-7",
            "extra": "mean: 1.3281146119986915 usec\nrounds: 187718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 818465.9682991186,
            "unit": "iter/sec",
            "range": "stddev: 6.770092653075938e-8",
            "extra": "mean: 1.2217978984246998 usec\nrounds: 193328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 743557.0112129843,
            "unit": "iter/sec",
            "range": "stddev: 3.6655566541489814e-7",
            "extra": "mean: 1.3448867873206836 usec\nrounds: 27716"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 786344.1786745916,
            "unit": "iter/sec",
            "range": "stddev: 1.0899763169729902e-7",
            "extra": "mean: 1.2717077675650021 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 742976.2468385702,
            "unit": "iter/sec",
            "range": "stddev: 1.5015579810600063e-7",
            "extra": "mean: 1.3459380488341164 usec\nrounds: 184429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 788082.3339431967,
            "unit": "iter/sec",
            "range": "stddev: 6.63069537465598e-8",
            "extra": "mean: 1.2689029520512993 usec\nrounds: 191194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788313.4283150239,
            "unit": "iter/sec",
            "range": "stddev: 7.517986312573897e-8",
            "extra": "mean: 1.2685309726835992 usec\nrounds: 181560"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 753443.7690286842,
            "unit": "iter/sec",
            "range": "stddev: 1.317036141508997e-7",
            "extra": "mean: 1.3272390603072717 usec\nrounds: 27710"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 792660.8620447436,
            "unit": "iter/sec",
            "range": "stddev: 7.902002709337348e-8",
            "extra": "mean: 1.261573578163561 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 740047.5449550453,
            "unit": "iter/sec",
            "range": "stddev: 1.7089332161212736e-7",
            "extra": "mean: 1.351264532687215 usec\nrounds: 194731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 795214.0490675892,
            "unit": "iter/sec",
            "range": "stddev: 8.645815411753899e-8",
            "extra": "mean: 1.2575230545442804 usec\nrounds: 188641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 784845.7971016836,
            "unit": "iter/sec",
            "range": "stddev: 7.527940813505578e-8",
            "extra": "mean: 1.274135637462605 usec\nrounds: 184619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 712886.8546075915,
            "unit": "iter/sec",
            "range": "stddev: 1.3927738863162695e-7",
            "extra": "mean: 1.4027471449876148 usec\nrounds: 25303"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 713241.058535262,
            "unit": "iter/sec",
            "range": "stddev: 1.81155516940466e-7",
            "extra": "mean: 1.4020505241995416 usec\nrounds: 189976"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 738232.3491746443,
            "unit": "iter/sec",
            "range": "stddev: 8.127070658183414e-8",
            "extra": "mean: 1.3545870769792412 usec\nrounds: 174366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 747180.6443984224,
            "unit": "iter/sec",
            "range": "stddev: 7.604603138021594e-8",
            "extra": "mean: 1.338364433684079 usec\nrounds: 163233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 698325.1378132297,
            "unit": "iter/sec",
            "range": "stddev: 1.6111312493615873e-7",
            "extra": "mean: 1.4319977126005374 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 68952.84561395556,
            "unit": "iter/sec",
            "range": "stddev: 0.000005913998905745975",
            "extra": "mean: 14.50266469927395 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57704.78874905442,
            "unit": "iter/sec",
            "range": "stddev: 9.554645791702485e-7",
            "extra": "mean: 17.32958428023682 usec\nrounds: 23861"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d270d4172cba38937b45f0b058fae0cc3ce26210",
          "message": "Update proto version in README (#3666)\n\nFixes #3665",
          "timestamp": "2024-02-03T12:22:26-06:00",
          "tree_id": "d8c035a64fd91bdb6a4d0cda4b871a02e1cf6455",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d270d4172cba38937b45f0b058fae0cc3ce26210"
        },
        "date": 1707021991759,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 873695.7802229363,
            "unit": "iter/sec",
            "range": "stddev: 3.496653077852194e-7",
            "extra": "mean: 1.1445631564625793 usec\nrounds: 31527"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 834234.0120651764,
            "unit": "iter/sec",
            "range": "stddev: 3.4156770996754266e-7",
            "extra": "mean: 1.1987044229046284 usec\nrounds: 78790"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 755440.289573768,
            "unit": "iter/sec",
            "range": "stddev: 2.284215054346689e-7",
            "extra": "mean: 1.323731357463363 usec\nrounds: 109076"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 658733.0148187912,
            "unit": "iter/sec",
            "range": "stddev: 3.041591949428957e-7",
            "extra": "mean: 1.5180657072047419 usec\nrounds: 112955"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 556727.6337704815,
            "unit": "iter/sec",
            "range": "stddev: 2.90329974308414e-7",
            "extra": "mean: 1.7962104615275187 usec\nrounds: 110083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 892614.0252540602,
            "unit": "iter/sec",
            "range": "stddev: 2.3288258107260223e-7",
            "extra": "mean: 1.1203050497838358 usec\nrounds: 55445"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 851989.7138410368,
            "unit": "iter/sec",
            "range": "stddev: 2.0574687459462135e-7",
            "extra": "mean: 1.1737230904956428 usec\nrounds: 136262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 757822.0147029742,
            "unit": "iter/sec",
            "range": "stddev: 3.618910935796741e-7",
            "extra": "mean: 1.3195710610121911 usec\nrounds: 128747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 660816.5366029262,
            "unit": "iter/sec",
            "range": "stddev: 2.1995269318694442e-7",
            "extra": "mean: 1.513279321278371 usec\nrounds: 46402"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 553084.3363178252,
            "unit": "iter/sec",
            "range": "stddev: 2.794558472920035e-7",
            "extra": "mean: 1.808042525046955 usec\nrounds: 121382"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 906057.2218261401,
            "unit": "iter/sec",
            "range": "stddev: 1.9171599280889658e-7",
            "extra": "mean: 1.1036830521415857 usec\nrounds: 36219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 862512.0304895301,
            "unit": "iter/sec",
            "range": "stddev: 1.8386967841166618e-7",
            "extra": "mean: 1.1594041180300254 usec\nrounds: 128963"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 774441.299173258,
            "unit": "iter/sec",
            "range": "stddev: 1.7723998697954452e-7",
            "extra": "mean: 1.2912534508006397 usec\nrounds: 126323"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 678615.0714722973,
            "unit": "iter/sec",
            "range": "stddev: 2.2369072919218197e-7",
            "extra": "mean: 1.4735894353634649 usec\nrounds: 131072"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 568094.9928833774,
            "unit": "iter/sec",
            "range": "stddev: 2.628114954415977e-7",
            "extra": "mean: 1.7602689911496672 usec\nrounds: 127463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 768573.1953918758,
            "unit": "iter/sec",
            "range": "stddev: 1.883972739674867e-7",
            "extra": "mean: 1.3011122505906878 usec\nrounds: 3871"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 767812.7640472328,
            "unit": "iter/sec",
            "range": "stddev: 2.2595278744174836e-7",
            "extra": "mean: 1.3024008545115617 usec\nrounds: 192358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 768582.4238421435,
            "unit": "iter/sec",
            "range": "stddev: 2.2701073506096455e-7",
            "extra": "mean: 1.3010966279985952 usec\nrounds: 149881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 803766.6452502337,
            "unit": "iter/sec",
            "range": "stddev: 1.0421836480535139e-7",
            "extra": "mean: 1.2441421971282147 usec\nrounds: 182424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 796858.5597041526,
            "unit": "iter/sec",
            "range": "stddev: 1.0997368644217692e-7",
            "extra": "mean: 1.2549278511499797 usec\nrounds: 179256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 748994.4711180844,
            "unit": "iter/sec",
            "range": "stddev: 3.026637806067709e-7",
            "extra": "mean: 1.3351233401058615 usec\nrounds: 18246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 794975.924267047,
            "unit": "iter/sec",
            "range": "stddev: 1.1302654794143316e-7",
            "extra": "mean: 1.2578997293810896 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 763274.472919471,
            "unit": "iter/sec",
            "range": "stddev: 2.6777907952021336e-7",
            "extra": "mean: 1.31014469300286 usec\nrounds: 193747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 801774.0388757553,
            "unit": "iter/sec",
            "range": "stddev: 1.0651047796228978e-7",
            "extra": "mean: 1.2472341975579508 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 800096.6653665892,
            "unit": "iter/sec",
            "range": "stddev: 1.0573787017237868e-7",
            "extra": "mean: 1.2498489786128766 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 751592.2956756529,
            "unit": "iter/sec",
            "range": "stddev: 1.680274177501313e-7",
            "extra": "mean: 1.3305085825833778 usec\nrounds: 30380"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 780438.0351064453,
            "unit": "iter/sec",
            "range": "stddev: 1.1344330071210263e-7",
            "extra": "mean: 1.2813317073451043 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 784245.01474614,
            "unit": "iter/sec",
            "range": "stddev: 1.0647953675354997e-7",
            "extra": "mean: 1.2751117076895924 usec\nrounds: 178304"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 781187.0921646853,
            "unit": "iter/sec",
            "range": "stddev: 1.1913632310703588e-7",
            "extra": "mean: 1.2801030764973085 usec\nrounds: 181376"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 780104.703700081,
            "unit": "iter/sec",
            "range": "stddev: 1.1043755612857607e-7",
            "extra": "mean: 1.281879208338244 usec\nrounds: 177831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 744872.2977990152,
            "unit": "iter/sec",
            "range": "stddev: 1.9342827191913245e-7",
            "extra": "mean: 1.342512002332277 usec\nrounds: 28442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 779492.71888081,
            "unit": "iter/sec",
            "range": "stddev: 1.1284587614180555e-7",
            "extra": "mean: 1.2828856200681293 usec\nrounds: 180765"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 778028.3532367707,
            "unit": "iter/sec",
            "range": "stddev: 9.945338973477787e-8",
            "extra": "mean: 1.2853002025437479 usec\nrounds: 183672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 747253.5101178278,
            "unit": "iter/sec",
            "range": "stddev: 2.8469903475149143e-7",
            "extra": "mean: 1.3382339279240305 usec\nrounds: 83952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 747372.138257217,
            "unit": "iter/sec",
            "range": "stddev: 2.526501762277121e-7",
            "extra": "mean: 1.3380215140637717 usec\nrounds: 199063"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 723061.9333935572,
            "unit": "iter/sec",
            "range": "stddev: 2.0132902686371053e-7",
            "extra": "mean: 1.3830073937189382 usec\nrounds: 24303"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 706750.8309911013,
            "unit": "iter/sec",
            "range": "stddev: 2.193641501150355e-7",
            "extra": "mean: 1.4149258213077232 usec\nrounds: 198474"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 739132.478651283,
            "unit": "iter/sec",
            "range": "stddev: 1.1031915756529425e-7",
            "extra": "mean: 1.3529374352818722 usec\nrounds: 172683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 707075.0245739488,
            "unit": "iter/sec",
            "range": "stddev: 2.799501691617341e-7",
            "extra": "mean: 1.4142770784508396 usec\nrounds: 192221"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 708634.0954803755,
            "unit": "iter/sec",
            "range": "stddev: 2.6460887963259416e-7",
            "extra": "mean: 1.4111655174058633 usec\nrounds: 182486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72682.72009747512,
            "unit": "iter/sec",
            "range": "stddev: 0.000004277043941568611",
            "extra": "mean: 13.758428394794464 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58939.791487825154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010148252845055353",
            "extra": "mean: 16.966466537408163 usec\nrounds: 24626"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b696c3b20f4b93b22391098024722f1b3f59a2d0",
          "message": "Skip test for PyPy and Windows (#3670)\n\nThis test fails randomly when ran under those conditions\n\nFixes #3669",
          "timestamp": "2024-02-05T08:12:22-06:00",
          "tree_id": "ee414a6b61a3f680277c42b75161a4b65563068e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b696c3b20f4b93b22391098024722f1b3f59a2d0"
        },
        "date": 1707143111101,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 915256.1411401449,
            "unit": "iter/sec",
            "range": "stddev: 2.166611284667597e-7",
            "extra": "mean: 1.0925903198576616 usec\nrounds: 28545"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 873050.6741185694,
            "unit": "iter/sec",
            "range": "stddev: 1.2041830704113662e-7",
            "extra": "mean: 1.145408885927038 usec\nrounds: 93337"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 768974.5852122116,
            "unit": "iter/sec",
            "range": "stddev: 1.7376650309577663e-7",
            "extra": "mean: 1.3004330952290615 usec\nrounds: 113241"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 685166.7116703474,
            "unit": "iter/sec",
            "range": "stddev: 1.800855530081339e-7",
            "extra": "mean: 1.4594988095118193 usec\nrounds: 117529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 563383.0258838511,
            "unit": "iter/sec",
            "range": "stddev: 1.5021582959829033e-7",
            "extra": "mean: 1.7749913541168054 usec\nrounds: 113913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 917904.0656283011,
            "unit": "iter/sec",
            "range": "stddev: 1.3148684952381799e-7",
            "extra": "mean: 1.0894384690577708 usec\nrounds: 52088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 877588.7535486816,
            "unit": "iter/sec",
            "range": "stddev: 1.345830836358339e-7",
            "extra": "mean: 1.139485887844765 usec\nrounds: 138441"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780290.361525085,
            "unit": "iter/sec",
            "range": "stddev: 1.1039122634675205e-7",
            "extra": "mean: 1.2815742053323462 usec\nrounds: 126502"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681335.0984024458,
            "unit": "iter/sec",
            "range": "stddev: 1.5497920966045466e-7",
            "extra": "mean: 1.4677065695642877 usec\nrounds: 124825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 559110.7856616804,
            "unit": "iter/sec",
            "range": "stddev: 1.7638966385090828e-7",
            "extra": "mean: 1.788554300229692 usec\nrounds: 110491"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 907453.8770625931,
            "unit": "iter/sec",
            "range": "stddev: 9.388475550062425e-8",
            "extra": "mean: 1.1019843821010236 usec\nrounds: 36438"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 879548.8610434385,
            "unit": "iter/sec",
            "range": "stddev: 1.2914922688385907e-7",
            "extra": "mean: 1.1369465009751318 usec\nrounds: 125879"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 785001.1782752688,
            "unit": "iter/sec",
            "range": "stddev: 1.569869020951531e-7",
            "extra": "mean: 1.2738834382352222 usec\nrounds: 127161"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 683395.6372624766,
            "unit": "iter/sec",
            "range": "stddev: 1.742728168152709e-7",
            "extra": "mean: 1.4632812173132486 usec\nrounds: 126920"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567738.0331266375,
            "unit": "iter/sec",
            "range": "stddev: 1.4499647031749875e-7",
            "extra": "mean: 1.7613757431271897 usec\nrounds: 112765"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 796180.5904709398,
            "unit": "iter/sec",
            "range": "stddev: 1.2045250359320758e-7",
            "extra": "mean: 1.2559964560408354 usec\nrounds: 3981"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 820808.5431128232,
            "unit": "iter/sec",
            "range": "stddev: 7.685780623643974e-8",
            "extra": "mean: 1.2183109062286481 usec\nrounds: 193467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 792520.126657744,
            "unit": "iter/sec",
            "range": "stddev: 1.8415317601267018e-7",
            "extra": "mean: 1.2617976078629707 usec\nrounds: 138763"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 828993.7328185606,
            "unit": "iter/sec",
            "range": "stddev: 7.892339408467191e-8",
            "extra": "mean: 1.2062817370163004 usec\nrounds: 195724"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 826002.6161926278,
            "unit": "iter/sec",
            "range": "stddev: 8.064422799613917e-8",
            "extra": "mean: 1.2106499185310027 usec\nrounds: 193747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 786318.182818559,
            "unit": "iter/sec",
            "range": "stddev: 1.46874543192381e-7",
            "extra": "mean: 1.271749810509911 usec\nrounds: 18071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 823680.6105898061,
            "unit": "iter/sec",
            "range": "stddev: 7.60078421140535e-8",
            "extra": "mean: 1.2140628140851082 usec\nrounds: 194167"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 826118.1328570319,
            "unit": "iter/sec",
            "range": "stddev: 8.624980078870859e-8",
            "extra": "mean: 1.2104806325236057 usec\nrounds: 194097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 827484.3923450457,
            "unit": "iter/sec",
            "range": "stddev: 9.221149393625942e-8",
            "extra": "mean: 1.2084820079398166 usec\nrounds: 195653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 821105.4747005304,
            "unit": "iter/sec",
            "range": "stddev: 8.676255650277729e-8",
            "extra": "mean: 1.2178703355555085 usec\nrounds: 195084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 774275.8708051662,
            "unit": "iter/sec",
            "range": "stddev: 1.3197077657606067e-7",
            "extra": "mean: 1.2915293343186638 usec\nrounds: 28458"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 769388.9322381766,
            "unit": "iter/sec",
            "range": "stddev: 1.5089582251446517e-7",
            "extra": "mean: 1.299732759465318 usec\nrounds: 196154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 804700.6555774705,
            "unit": "iter/sec",
            "range": "stddev: 6.17143180352721e-8",
            "extra": "mean: 1.2426981301293687 usec\nrounds: 187981"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 806121.4240828278,
            "unit": "iter/sec",
            "range": "stddev: 6.846696168384749e-8",
            "extra": "mean: 1.2405079062844153 usec\nrounds: 185512"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 801552.1262485421,
            "unit": "iter/sec",
            "range": "stddev: 9.465112611516454e-8",
            "extra": "mean: 1.2475794988907858 usec\nrounds: 182796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 757045.4803084868,
            "unit": "iter/sec",
            "range": "stddev: 3.406502803019074e-7",
            "extra": "mean: 1.3209246023006598 usec\nrounds: 18139"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 767119.3416270895,
            "unit": "iter/sec",
            "range": "stddev: 1.6335331412343398e-7",
            "extra": "mean: 1.3035781341126944 usec\nrounds: 188907"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 803701.1633375871,
            "unit": "iter/sec",
            "range": "stddev: 6.211127160541187e-8",
            "extra": "mean: 1.2442435641715743 usec\nrounds: 185962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 769798.1732890615,
            "unit": "iter/sec",
            "range": "stddev: 1.5651791843968212e-7",
            "extra": "mean: 1.2990417939384964 usec\nrounds: 183860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 803209.7174858154,
            "unit": "iter/sec",
            "range": "stddev: 6.221494993552708e-8",
            "extra": "mean: 1.2450048576730022 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 737817.1653705882,
            "unit": "iter/sec",
            "range": "stddev: 1.4844305656350698e-7",
            "extra": "mean: 1.3553493289868415 usec\nrounds: 25320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 736765.0545158827,
            "unit": "iter/sec",
            "range": "stddev: 1.7351557267528202e-7",
            "extra": "mean: 1.3572847868810565 usec\nrounds: 198989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 756032.1945791671,
            "unit": "iter/sec",
            "range": "stddev: 7.085238095881049e-8",
            "extra": "mean: 1.3226949952265374 usec\nrounds: 181560"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 755183.3325083836,
            "unit": "iter/sec",
            "range": "stddev: 6.523030798632529e-8",
            "extra": "mean: 1.324181767463596 usec\nrounds: 173521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 752562.1653135924,
            "unit": "iter/sec",
            "range": "stddev: 8.782798941505423e-8",
            "extra": "mean: 1.3287938805471309 usec\nrounds: 174196"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71919.86724039944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040076186384478835",
            "extra": "mean: 13.90436382004709 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58728.78903358161,
            "unit": "iter/sec",
            "range": "stddev: 7.324781705764077e-7",
            "extra": "mean: 17.027424138239795 usec\nrounds: 18102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b696c3b20f4b93b22391098024722f1b3f59a2d0",
          "message": "Skip test for PyPy and Windows (#3670)\n\nThis test fails randomly when ran under those conditions\n\nFixes #3669",
          "timestamp": "2024-02-05T08:12:22-06:00",
          "tree_id": "ee414a6b61a3f680277c42b75161a4b65563068e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b696c3b20f4b93b22391098024722f1b3f59a2d0"
        },
        "date": 1707143166298,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 906891.167224621,
            "unit": "iter/sec",
            "range": "stddev: 1.435476147338403e-7",
            "extra": "mean: 1.1026681438086137 usec\nrounds: 32677"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 866370.1121246711,
            "unit": "iter/sec",
            "range": "stddev: 1.7903530462989876e-7",
            "extra": "mean: 1.1542411101274226 usec\nrounds: 91978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 769789.4016880948,
            "unit": "iter/sec",
            "range": "stddev: 2.618776093825747e-7",
            "extra": "mean: 1.2990565962678484 usec\nrounds: 122967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 672113.9496278529,
            "unit": "iter/sec",
            "range": "stddev: 2.998591066576836e-7",
            "extra": "mean: 1.487842947693165 usec\nrounds: 114619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 558584.4222798287,
            "unit": "iter/sec",
            "range": "stddev: 2.5447413525051057e-7",
            "extra": "mean: 1.7902396846631707 usec\nrounds: 110491"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 904678.3213249445,
            "unit": "iter/sec",
            "range": "stddev: 1.5858610928585407e-7",
            "extra": "mean: 1.1053652734106112 usec\nrounds: 51822"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 874934.6587125685,
            "unit": "iter/sec",
            "range": "stddev: 2.460489381277853e-7",
            "extra": "mean: 1.1429424929530854 usec\nrounds: 144166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 776729.4597985237,
            "unit": "iter/sec",
            "range": "stddev: 2.6462110434441596e-7",
            "extra": "mean: 1.2874495583821302 usec\nrounds: 136748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 668672.5690932112,
            "unit": "iter/sec",
            "range": "stddev: 2.710495471804397e-7",
            "extra": "mean: 1.4955002586035537 usec\nrounds: 112364"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 559645.303188457,
            "unit": "iter/sec",
            "range": "stddev: 2.958373388903016e-7",
            "extra": "mean: 1.7868460510661273 usec\nrounds: 120673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 886727.977197527,
            "unit": "iter/sec",
            "range": "stddev: 1.9569388385904343e-7",
            "extra": "mean: 1.1277415686831775 usec\nrounds: 35756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 870867.151811494,
            "unit": "iter/sec",
            "range": "stddev: 2.3401974194691792e-7",
            "extra": "mean: 1.148280765808994 usec\nrounds: 132398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 784184.7730623551,
            "unit": "iter/sec",
            "range": "stddev: 1.9275689074801544e-7",
            "extra": "mean: 1.2752096627620746 usec\nrounds: 131458"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 683338.0283601914,
            "unit": "iter/sec",
            "range": "stddev: 2.103464404321671e-7",
            "extra": "mean: 1.4634045794285786 usec\nrounds: 126353"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 568187.2653758461,
            "unit": "iter/sec",
            "range": "stddev: 2.7513055947367815e-7",
            "extra": "mean: 1.7599831269335424 usec\nrounds: 127523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 793832.1524935501,
            "unit": "iter/sec",
            "range": "stddev: 1.4472189593177789e-7",
            "extra": "mean: 1.2597121404806353 usec\nrounds: 3778"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 824729.1527318099,
            "unit": "iter/sec",
            "range": "stddev: 1.1328611256198314e-7",
            "extra": "mean: 1.2125192818607513 usec\nrounds: 186479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 789019.7864336638,
            "unit": "iter/sec",
            "range": "stddev: 2.3213154669989213e-7",
            "extra": "mean: 1.267395339374134 usec\nrounds: 155570"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 825086.2915604161,
            "unit": "iter/sec",
            "range": "stddev: 1.225406702508675e-7",
            "extra": "mean: 1.2119944425555589 usec\nrounds: 192842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 825909.1308209284,
            "unit": "iter/sec",
            "range": "stddev: 1.1847877920969679e-7",
            "extra": "mean: 1.2107869530465545 usec\nrounds: 197234"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 780295.0090287211,
            "unit": "iter/sec",
            "range": "stddev: 3.871744473655617e-7",
            "extra": "mean: 1.281566572167056 usec\nrounds: 19266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 819447.2920840079,
            "unit": "iter/sec",
            "range": "stddev: 1.0477906641522577e-7",
            "extra": "mean: 1.2203347422831954 usec\nrounds: 192634"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 822423.7697804978,
            "unit": "iter/sec",
            "range": "stddev: 1.105479880527972e-7",
            "extra": "mean: 1.2159181637793577 usec\nrounds: 192427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 822095.8699202522,
            "unit": "iter/sec",
            "range": "stddev: 1.2689688420934687e-7",
            "extra": "mean: 1.216403142977723 usec\nrounds: 190786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 783635.7981410588,
            "unit": "iter/sec",
            "range": "stddev: 2.7949074489436157e-7",
            "extra": "mean: 1.2761030090409353 usec\nrounds: 192014"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 771334.6118749144,
            "unit": "iter/sec",
            "range": "stddev: 2.771906496109788e-7",
            "extra": "mean: 1.296454203668184 usec\nrounds: 28931"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 800663.9916523129,
            "unit": "iter/sec",
            "range": "stddev: 1.1809659330275738e-7",
            "extra": "mean: 1.2489633734324952 usec\nrounds: 183295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 800003.215242391,
            "unit": "iter/sec",
            "range": "stddev: 1.1186535207288314e-7",
            "extra": "mean: 1.249994976203955 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 767848.7719602328,
            "unit": "iter/sec",
            "range": "stddev: 2.565331128309945e-7",
            "extra": "mean: 1.3023397790259024 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 798160.2178911647,
            "unit": "iter/sec",
            "range": "stddev: 1.1911129763207112e-7",
            "extra": "mean: 1.252881285717447 usec\nrounds: 180765"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 772266.4341907295,
            "unit": "iter/sec",
            "range": "stddev: 3.108337542916339e-7",
            "extra": "mean: 1.2948898925639776 usec\nrounds: 29054"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 764744.8087281592,
            "unit": "iter/sec",
            "range": "stddev: 2.248191413564551e-7",
            "extra": "mean: 1.3076257446756543 usec\nrounds: 183672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 791802.324429528,
            "unit": "iter/sec",
            "range": "stddev: 1.2019517926423686e-7",
            "extra": "mean: 1.2629414806536123 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 767113.2161610703,
            "unit": "iter/sec",
            "range": "stddev: 2.7349412409940585e-7",
            "extra": "mean: 1.3035885432979304 usec\nrounds: 188310"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 799259.4887141108,
            "unit": "iter/sec",
            "range": "stddev: 1.1700800226427153e-7",
            "extra": "mean: 1.2511581208861853 usec\nrounds: 180461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 725662.7182783526,
            "unit": "iter/sec",
            "range": "stddev: 2.9989121405338275e-7",
            "extra": "mean: 1.3780506767283256 usec\nrounds: 25541"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 750539.6619226924,
            "unit": "iter/sec",
            "range": "stddev: 1.1836108294190997e-7",
            "extra": "mean: 1.3323746241980783 usec\nrounds: 177949"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 712850.0960723781,
            "unit": "iter/sec",
            "range": "stddev: 2.9132168235532816e-7",
            "extra": "mean: 1.4028194784706411 usec\nrounds: 199507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 740376.8573538656,
            "unit": "iter/sec",
            "range": "stddev: 1.430456479514072e-7",
            "extra": "mean: 1.3506635034136982 usec\nrounds: 199358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 742298.075321548,
            "unit": "iter/sec",
            "range": "stddev: 1.1611375183329624e-7",
            "extra": "mean: 1.3471677123328398 usec\nrounds: 166575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71896.73735310858,
            "unit": "iter/sec",
            "range": "stddev: 0.000004134976499642687",
            "extra": "mean: 13.908836990594864 usec\nrounds: 32"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58599.009430959326,
            "unit": "iter/sec",
            "range": "stddev: 9.415017734277946e-7",
            "extra": "mean: 17.065134883861617 usec\nrounds: 18876"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fonsecassara@gmail.com",
            "name": "sarafonseca",
            "username": "sarafonseca-123"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66e7d61ceba839c16d51b9297334ec8615cdf6a0",
          "message": "Synchronous gauge prototype (#3462)\n\n* merge with cherry pick\r\n\r\n* docs/getting_started/metrics_example.py\r\n\r\n* Fix\r\n\r\n* edit changelog\r\n\r\n* Format\r\n\r\n* Update docs/getting_started/metrics_example.py\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>\r\n\r\n* Make synchronous gauge private for opentelemetry API\r\n\r\n* Fix name of SDK Gauge\r\n\r\n* Fix docs\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-02-05T18:42:03Z",
          "tree_id": "61c566772a2054f4840be8b29a9333e4e8e48836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/66e7d61ceba839c16d51b9297334ec8615cdf6a0"
        },
        "date": 1707159755658,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 854212.0983021231,
            "unit": "iter/sec",
            "range": "stddev: 2.154714767410445e-7",
            "extra": "mean: 1.170669441450961 usec\nrounds: 19947"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 823657.5491704438,
            "unit": "iter/sec",
            "range": "stddev: 1.8900731593063343e-7",
            "extra": "mean: 1.2140968063816833 usec\nrounds: 73878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 737714.6107825617,
            "unit": "iter/sec",
            "range": "stddev: 1.9143328776094986e-7",
            "extra": "mean: 1.3555377450626984 usec\nrounds: 118150"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 640528.7108742464,
            "unit": "iter/sec",
            "range": "stddev: 2.4350156430437095e-7",
            "extra": "mean: 1.5612102674291017 usec\nrounds: 116433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 537934.9572081171,
            "unit": "iter/sec",
            "range": "stddev: 2.6613863103736303e-7",
            "extra": "mean: 1.8589608029751419 usec\nrounds: 111593"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 860417.6675066748,
            "unit": "iter/sec",
            "range": "stddev: 1.7123009934244607e-7",
            "extra": "mean: 1.1622262509994803 usec\nrounds: 52501"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 819643.3128822512,
            "unit": "iter/sec",
            "range": "stddev: 2.3889948562886133e-7",
            "extra": "mean: 1.2200428946141584 usec\nrounds: 138049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 736154.2736609685,
            "unit": "iter/sec",
            "range": "stddev: 1.769289355698578e-7",
            "extra": "mean: 1.3584109143683978 usec\nrounds: 129211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 639971.3908056987,
            "unit": "iter/sec",
            "range": "stddev: 2.4901685202364027e-7",
            "extra": "mean: 1.5625698497881906 usec\nrounds: 117375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 536196.3521767216,
            "unit": "iter/sec",
            "range": "stddev: 2.3802096478682774e-7",
            "extra": "mean: 1.864988443021739 usec\nrounds: 125555"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 872566.3145862501,
            "unit": "iter/sec",
            "range": "stddev: 2.6826593466871443e-7",
            "extra": "mean: 1.1460446997362896 usec\nrounds: 33291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 835452.756722876,
            "unit": "iter/sec",
            "range": "stddev: 2.109951300038526e-7",
            "extra": "mean: 1.1969557727268416 usec\nrounds: 137483"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 742879.2327408231,
            "unit": "iter/sec",
            "range": "stddev: 2.268528749035605e-7",
            "extra": "mean: 1.3461138175993157 usec\nrounds: 131651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 650487.6832912096,
            "unit": "iter/sec",
            "range": "stddev: 2.990601411305081e-7",
            "extra": "mean: 1.5373081238685362 usec\nrounds: 123703"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 541128.6453384045,
            "unit": "iter/sec",
            "range": "stddev: 4.507776500068988e-7",
            "extra": "mean: 1.847989398851048 usec\nrounds: 99109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 765100.7209602882,
            "unit": "iter/sec",
            "range": "stddev: 1.1277628206464573e-7",
            "extra": "mean: 1.3070174587535175 usec\nrounds: 3769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 760446.1421509479,
            "unit": "iter/sec",
            "range": "stddev: 2.6834733643004425e-7",
            "extra": "mean: 1.315017520072448 usec\nrounds: 196082"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 764076.3558203271,
            "unit": "iter/sec",
            "range": "stddev: 2.0285135362515143e-7",
            "extra": "mean: 1.3087697222699437 usec\nrounds: 113288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 807407.9883235106,
            "unit": "iter/sec",
            "range": "stddev: 1.1257008874146342e-7",
            "extra": "mean: 1.23853121898928 usec\nrounds: 187390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 758029.1000914999,
            "unit": "iter/sec",
            "range": "stddev: 2.6137274363220026e-7",
            "extra": "mean: 1.319210568406005 usec\nrounds: 167930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 739660.6233099314,
            "unit": "iter/sec",
            "range": "stddev: 3.27098006443259e-7",
            "extra": "mean: 1.3519713886147777 usec\nrounds: 18398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 752245.0344640806,
            "unit": "iter/sec",
            "range": "stddev: 2.6347933279975674e-7",
            "extra": "mean: 1.3293540723900248 usec\nrounds: 187521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 808567.7278175973,
            "unit": "iter/sec",
            "range": "stddev: 9.716409874058744e-8",
            "extra": "mean: 1.2367547771156993 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 809428.1052477999,
            "unit": "iter/sec",
            "range": "stddev: 9.99763473497209e-8",
            "extra": "mean: 1.2354401750033848 usec\nrounds: 189440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 754978.3899799729,
            "unit": "iter/sec",
            "range": "stddev: 2.7679055536733525e-7",
            "extra": "mean: 1.3245412229964977 usec\nrounds: 194660"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 749083.8205514984,
            "unit": "iter/sec",
            "range": "stddev: 1.7135923886858677e-7",
            "extra": "mean: 1.3349640888836303 usec\nrounds: 26152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 743151.9205481515,
            "unit": "iter/sec",
            "range": "stddev: 2.1429267932578208e-7",
            "extra": "mean: 1.3456198824897019 usec\nrounds: 194378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 789643.700024501,
            "unit": "iter/sec",
            "range": "stddev: 1.0166863744893988e-7",
            "extra": "mean: 1.26639394447011 usec\nrounds: 186738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 788641.8233722367,
            "unit": "iter/sec",
            "range": "stddev: 1.301702712708924e-7",
            "extra": "mean: 1.2680027489843166 usec\nrounds: 185641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 742267.6982261956,
            "unit": "iter/sec",
            "range": "stddev: 2.872484960939073e-7",
            "extra": "mean: 1.3472228447899721 usec\nrounds: 159736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 736203.4239048653,
            "unit": "iter/sec",
            "range": "stddev: 3.2052904518015814e-7",
            "extra": "mean: 1.3583202244509303 usec\nrounds: 28040"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 742575.365818794,
            "unit": "iter/sec",
            "range": "stddev: 2.624339869285466e-7",
            "extra": "mean: 1.3466646565865528 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 740053.6773965841,
            "unit": "iter/sec",
            "range": "stddev: 2.802683280656601e-7",
            "extra": "mean: 1.3512533354578746 usec\nrounds: 195653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 785958.7342668278,
            "unit": "iter/sec",
            "range": "stddev: 1.3759095637444429e-7",
            "extra": "mean: 1.2723314296301294 usec\nrounds: 191262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 793188.563546597,
            "unit": "iter/sec",
            "range": "stddev: 1.0029000991497792e-7",
            "extra": "mean: 1.2607342641561592 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 705922.2619655367,
            "unit": "iter/sec",
            "range": "stddev: 2.579243804037058e-7",
            "extra": "mean: 1.4165865760000924 usec\nrounds: 25200"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 710904.8460740641,
            "unit": "iter/sec",
            "range": "stddev: 2.484146067900413e-7",
            "extra": "mean: 1.4066580155170545 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 744024.3990316463,
            "unit": "iter/sec",
            "range": "stddev: 1.2484987281921053e-7",
            "extra": "mean: 1.3440419444597624 usec\nrounds: 165548"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 698776.4772122278,
            "unit": "iter/sec",
            "range": "stddev: 2.647894855082891e-7",
            "extra": "mean: 1.4310727859493855 usec\nrounds: 160165"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 696578.5739685299,
            "unit": "iter/sec",
            "range": "stddev: 2.3002229233472822e-7",
            "extra": "mean: 1.435588227043541 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71922.94147221763,
            "unit": "iter/sec",
            "range": "stddev: 0.000004154434873291112",
            "extra": "mean: 13.90376950011534 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58165.23748582104,
            "unit": "iter/sec",
            "range": "stddev: 9.965849892811944e-7",
            "extra": "mean: 17.192399502258894 usec\nrounds: 26008"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fonsecassara@gmail.com",
            "name": "sarafonseca",
            "username": "sarafonseca-123"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66e7d61ceba839c16d51b9297334ec8615cdf6a0",
          "message": "Synchronous gauge prototype (#3462)\n\n* merge with cherry pick\r\n\r\n* docs/getting_started/metrics_example.py\r\n\r\n* Fix\r\n\r\n* edit changelog\r\n\r\n* Format\r\n\r\n* Update docs/getting_started/metrics_example.py\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>\r\n\r\n* Make synchronous gauge private for opentelemetry API\r\n\r\n* Fix name of SDK Gauge\r\n\r\n* Fix docs\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-02-05T18:42:03Z",
          "tree_id": "61c566772a2054f4840be8b29a9333e4e8e48836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/66e7d61ceba839c16d51b9297334ec8615cdf6a0"
        },
        "date": 1707159809678,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 911903.5076610689,
            "unit": "iter/sec",
            "range": "stddev: 2.652081482178279e-7",
            "extra": "mean: 1.0966072524108268 usec\nrounds: 32122"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 872793.7784735025,
            "unit": "iter/sec",
            "range": "stddev: 2.3673174393499605e-7",
            "extra": "mean: 1.145746022329557 usec\nrounds: 97934"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 775476.0694042937,
            "unit": "iter/sec",
            "range": "stddev: 1.9408852395698203e-7",
            "extra": "mean: 1.2895304438835637 usec\nrounds: 118098"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 683912.7818395299,
            "unit": "iter/sec",
            "range": "stddev: 2.423711981395769e-7",
            "extra": "mean: 1.4621747488185348 usec\nrounds: 120999"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 571198.0940701483,
            "unit": "iter/sec",
            "range": "stddev: 2.45300852630093e-7",
            "extra": "mean: 1.750706121714039 usec\nrounds: 109454"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915196.5309064783,
            "unit": "iter/sec",
            "range": "stddev: 2.0473875353486766e-7",
            "extra": "mean: 1.0926614844240352 usec\nrounds: 53898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 873106.8083459965,
            "unit": "iter/sec",
            "range": "stddev: 2.531538353101605e-7",
            "extra": "mean: 1.1453352447158078 usec\nrounds: 140543"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 775972.1617251972,
            "unit": "iter/sec",
            "range": "stddev: 1.629575443384087e-7",
            "extra": "mean: 1.28870602493874 usec\nrounds: 136853"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 685471.5617224632,
            "unit": "iter/sec",
            "range": "stddev: 1.9855819144930442e-7",
            "extra": "mean: 1.4588497260005724 usec\nrounds: 128071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 574156.8478805632,
            "unit": "iter/sec",
            "range": "stddev: 2.7062089843462393e-7",
            "extra": "mean: 1.7416843562719662 usec\nrounds: 127705"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 912486.0965955581,
            "unit": "iter/sec",
            "range": "stddev: 2.2603309775973136e-7",
            "extra": "mean: 1.0959071088654964 usec\nrounds: 34083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880466.0253966263,
            "unit": "iter/sec",
            "range": "stddev: 2.0866472403504803e-7",
            "extra": "mean: 1.1357621658933708 usec\nrounds: 133054"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 777316.3908109085,
            "unit": "iter/sec",
            "range": "stddev: 1.977793632600422e-7",
            "extra": "mean: 1.2864774393304437 usec\nrounds: 128685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 686576.2297858201,
            "unit": "iter/sec",
            "range": "stddev: 1.8824617383267907e-7",
            "extra": "mean: 1.4565025071024575 usec\nrounds: 133418"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 570104.5395717138,
            "unit": "iter/sec",
            "range": "stddev: 2.6432359948437093e-7",
            "extra": "mean: 1.7540642646894928 usec\nrounds: 132040"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784831.2556027685,
            "unit": "iter/sec",
            "range": "stddev: 1.1324714855820119e-7",
            "extra": "mean: 1.2741592448837642 usec\nrounds: 3879"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 821650.5761985049,
            "unit": "iter/sec",
            "range": "stddev: 1.0405514921303614e-7",
            "extra": "mean: 1.2170623729452692 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 787214.3396683537,
            "unit": "iter/sec",
            "range": "stddev: 2.691988127566636e-7",
            "extra": "mean: 1.2703020633761464 usec\nrounds: 145336"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 784560.2086720895,
            "unit": "iter/sec",
            "range": "stddev: 3.415102227796988e-7",
            "extra": "mean: 1.2745994366608957 usec\nrounds: 175334"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 815395.4544351413,
            "unit": "iter/sec",
            "range": "stddev: 1.4384026763267642e-7",
            "extra": "mean: 1.2263987916056536 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 779951.4914680126,
            "unit": "iter/sec",
            "range": "stddev: 1.6407775322348972e-7",
            "extra": "mean: 1.2821310183250187 usec\nrounds: 18855"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 779250.7801460768,
            "unit": "iter/sec",
            "range": "stddev: 2.352300767290592e-7",
            "extra": "mean: 1.2832839253783512 usec\nrounds: 189909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 817787.4336484061,
            "unit": "iter/sec",
            "range": "stddev: 1.1540104716811187e-7",
            "extra": "mean: 1.2228116486685134 usec\nrounds: 190651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 820506.842628478,
            "unit": "iter/sec",
            "range": "stddev: 9.811521834921317e-8",
            "extra": "mean: 1.2187588793245392 usec\nrounds: 194660"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 818929.4653882866,
            "unit": "iter/sec",
            "range": "stddev: 1.1192356101065299e-7",
            "extra": "mean: 1.2211063861597173 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 772690.9791581654,
            "unit": "iter/sec",
            "range": "stddev: 2.2489720119526518e-7",
            "extra": "mean: 1.2941784322232988 usec\nrounds: 26883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 802588.9724166124,
            "unit": "iter/sec",
            "range": "stddev: 1.2137560375574472e-7",
            "extra": "mean: 1.245967779732855 usec\nrounds: 183421"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 802130.5740318665,
            "unit": "iter/sec",
            "range": "stddev: 1.4001357800691357e-7",
            "extra": "mean: 1.24667982043566 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 766263.7440192099,
            "unit": "iter/sec",
            "range": "stddev: 2.6325440451627756e-7",
            "extra": "mean: 1.3050336882113145 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 803073.8494031258,
            "unit": "iter/sec",
            "range": "stddev: 1.0862632415023808e-7",
            "extra": "mean: 1.245215493871749 usec\nrounds: 191262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 775846.6965323747,
            "unit": "iter/sec",
            "range": "stddev: 1.289250061050509e-7",
            "extra": "mean: 1.2889144266122061 usec\nrounds: 26789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 802415.6941554219,
            "unit": "iter/sec",
            "range": "stddev: 1.0589551921169587e-7",
            "extra": "mean: 1.246236841183103 usec\nrounds: 185128"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 798197.7578672717,
            "unit": "iter/sec",
            "range": "stddev: 1.0321570046879764e-7",
            "extra": "mean: 1.2528223615560254 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 800086.5266653943,
            "unit": "iter/sec",
            "range": "stddev: 1.051646098251028e-7",
            "extra": "mean: 1.249864816706521 usec\nrounds: 179376"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 800697.00768235,
            "unit": "iter/sec",
            "range": "stddev: 1.059258876470124e-7",
            "extra": "mean: 1.2489118735369582 usec\nrounds: 181867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 728242.262312583,
            "unit": "iter/sec",
            "range": "stddev: 3.5213025749352036e-7",
            "extra": "mean: 1.3731694131900993 usec\nrounds: 25280"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 749723.7747254454,
            "unit": "iter/sec",
            "range": "stddev: 1.4279092097721267e-7",
            "extra": "mean: 1.3338245814149452 usec\nrounds: 175162"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 719241.2239594619,
            "unit": "iter/sec",
            "range": "stddev: 2.5522254278627966e-7",
            "extra": "mean: 1.390354121382178 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 742607.2193254288,
            "unit": "iter/sec",
            "range": "stddev: 1.354559509606414e-7",
            "extra": "mean: 1.3466068925486372 usec\nrounds: 168775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 713412.3678320573,
            "unit": "iter/sec",
            "range": "stddev: 2.1533071114427607e-7",
            "extra": "mean: 1.4017138545534826 usec\nrounds: 199655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72581.92613471096,
            "unit": "iter/sec",
            "range": "stddev: 0.000004228905641394054",
            "extra": "mean: 13.777534618522182 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59137.05314007191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011448935981547977",
            "extra": "mean: 16.909872015966062 usec\nrounds: 21498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdandrutu@gmail.com",
            "name": "Bogdan Drutu",
            "username": "bogdandrutu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5fdcd6d7b2068e61c0c9749fc07ad1ef3401d2f",
          "message": "Add code.lineno, code.function and code.filepath to all logs (#3675)\n\nSigned-off-by: Bogdan Drutu <bogdandrutu@gmail.com>",
          "timestamp": "2024-02-07T17:37:46-06:00",
          "tree_id": "b5b67744641f965e314168f84a3688a043d00f2e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d5fdcd6d7b2068e61c0c9749fc07ad1ef3401d2f"
        },
        "date": 1707356906924,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 918114.3586114486,
            "unit": "iter/sec",
            "range": "stddev: 7.852427353839069e-8",
            "extra": "mean: 1.0891889344943857 usec\nrounds: 30921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 871306.0571854392,
            "unit": "iter/sec",
            "range": "stddev: 1.548450037625672e-7",
            "extra": "mean: 1.147702339210493 usec\nrounds: 92517"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 781580.7385109423,
            "unit": "iter/sec",
            "range": "stddev: 1.3503109548667656e-7",
            "extra": "mean: 1.2794583473297811 usec\nrounds: 123961"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 683093.9551350591,
            "unit": "iter/sec",
            "range": "stddev: 1.5160810730187112e-7",
            "extra": "mean: 1.463927461929133 usec\nrounds: 113986"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 567962.9076505814,
            "unit": "iter/sec",
            "range": "stddev: 2.94858709876122e-7",
            "extra": "mean: 1.7606783586212882 usec\nrounds: 119173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 912366.0632961746,
            "unit": "iter/sec",
            "range": "stddev: 1.2163122216536555e-7",
            "extra": "mean: 1.0960512893116865 usec\nrounds: 48398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 860750.1363831663,
            "unit": "iter/sec",
            "range": "stddev: 1.3338000366542517e-7",
            "extra": "mean: 1.1617773355249823 usec\nrounds: 114643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 777239.5673210148,
            "unit": "iter/sec",
            "range": "stddev: 1.863933901623435e-7",
            "extra": "mean: 1.2866045966326634 usec\nrounds: 133750"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 675448.2396317221,
            "unit": "iter/sec",
            "range": "stddev: 1.8547053120437169e-7",
            "extra": "mean: 1.4804983436558141 usec\nrounds: 123789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570677.1740189155,
            "unit": "iter/sec",
            "range": "stddev: 1.7161047514297113e-7",
            "extra": "mean: 1.7523041844439609 usec\nrounds: 124825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928621.2213951332,
            "unit": "iter/sec",
            "range": "stddev: 1.2820291759978968e-7",
            "extra": "mean: 1.0768653321293147 usec\nrounds: 34473"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 885067.9848665483,
            "unit": "iter/sec",
            "range": "stddev: 1.5628482659649834e-7",
            "extra": "mean: 1.1298567082965736 usec\nrounds: 137062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 776000.3724380472,
            "unit": "iter/sec",
            "range": "stddev: 2.1899744115491073e-7",
            "extra": "mean: 1.2886591753276975 usec\nrounds: 129274"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 689767.2812122438,
            "unit": "iter/sec",
            "range": "stddev: 1.4341127275604056e-7",
            "extra": "mean: 1.4497643295613156 usec\nrounds: 117503"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574053.0658721549,
            "unit": "iter/sec",
            "range": "stddev: 2.7429400880800795e-7",
            "extra": "mean: 1.7419992322150686 usec\nrounds: 115606"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 766776.0234081893,
            "unit": "iter/sec",
            "range": "stddev: 2.3154381205286214e-7",
            "extra": "mean: 1.3041618014543148 usec\nrounds: 3819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 796844.8847498291,
            "unit": "iter/sec",
            "range": "stddev: 7.813727654940836e-8",
            "extra": "mean: 1.2549493874381232 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 755751.2730375349,
            "unit": "iter/sec",
            "range": "stddev: 2.0365461979218248e-7",
            "extra": "mean: 1.323186656346306 usec\nrounds: 152434"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 781298.3328621853,
            "unit": "iter/sec",
            "range": "stddev: 8.165241007992913e-8",
            "extra": "mean: 1.2799208163373772 usec\nrounds: 184556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 775065.5689161218,
            "unit": "iter/sec",
            "range": "stddev: 1.4974950679111219e-7",
            "extra": "mean: 1.2902134220701278 usec\nrounds: 184937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 777069.348042092,
            "unit": "iter/sec",
            "range": "stddev: 1.299557035361983e-7",
            "extra": "mean: 1.286886431075431 usec\nrounds: 17649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 803237.2052140448,
            "unit": "iter/sec",
            "range": "stddev: 9.903107404429058e-8",
            "extra": "mean: 1.2449622521326342 usec\nrounds: 183986"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 803460.8023658148,
            "unit": "iter/sec",
            "range": "stddev: 1.0826203203427048e-7",
            "extra": "mean: 1.244615788418638 usec\nrounds: 191535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 778048.560851644,
            "unit": "iter/sec",
            "range": "stddev: 1.9617073197034903e-7",
            "extra": "mean: 1.2852668204994946 usec\nrounds: 199284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 806152.665001789,
            "unit": "iter/sec",
            "range": "stddev: 8.294206392747737e-8",
            "extra": "mean: 1.2404598327511338 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 777076.4544373523,
            "unit": "iter/sec",
            "range": "stddev: 1.2471881357923562e-7",
            "extra": "mean: 1.2868746624475416 usec\nrounds: 26209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 783749.4048660612,
            "unit": "iter/sec",
            "range": "stddev: 8.937742614632386e-8",
            "extra": "mean: 1.2759180342483256 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 800082.2744785397,
            "unit": "iter/sec",
            "range": "stddev: 8.740228433900322e-8",
            "extra": "mean: 1.2498714593468008 usec\nrounds: 54444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 796563.0543250924,
            "unit": "iter/sec",
            "range": "stddev: 7.594365025155056e-8",
            "extra": "mean: 1.2553933986397028 usec\nrounds: 179797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 798570.6713926747,
            "unit": "iter/sec",
            "range": "stddev: 8.511915060127933e-8",
            "extra": "mean: 1.2522373232866677 usec\nrounds: 185833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 760375.5050788526,
            "unit": "iter/sec",
            "range": "stddev: 1.6244870348923097e-7",
            "extra": "mean: 1.315139682065768 usec\nrounds: 27025"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 757245.693136401,
            "unit": "iter/sec",
            "range": "stddev: 1.7428650011189156e-7",
            "extra": "mean: 1.320575354952692 usec\nrounds: 58173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 764907.584801247,
            "unit": "iter/sec",
            "range": "stddev: 2.0959945139066456e-7",
            "extra": "mean: 1.3073474755252157 usec\nrounds: 58286"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 764355.5144636887,
            "unit": "iter/sec",
            "range": "stddev: 1.8024079221539608e-7",
            "extra": "mean: 1.3082917321550973 usec\nrounds: 58701"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 792018.3872683139,
            "unit": "iter/sec",
            "range": "stddev: 7.702864009384883e-8",
            "extra": "mean: 1.2625969498625134 usec\nrounds: 182238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 718950.1307007951,
            "unit": "iter/sec",
            "range": "stddev: 1.193595634600309e-7",
            "extra": "mean: 1.3909170571055494 usec\nrounds: 25913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 708778.9946365316,
            "unit": "iter/sec",
            "range": "stddev: 1.687632489473794e-7",
            "extra": "mean: 1.4108770259378374 usec\nrounds: 198254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 735542.2147070349,
            "unit": "iter/sec",
            "range": "stddev: 9.619810634158922e-8",
            "extra": "mean: 1.3595412744573718 usec\nrounds: 174366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 698192.3974106594,
            "unit": "iter/sec",
            "range": "stddev: 2.0773668836277466e-7",
            "extra": "mean: 1.4322699641368695 usec\nrounds: 190922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 704333.3699217802,
            "unit": "iter/sec",
            "range": "stddev: 1.510353925064342e-7",
            "extra": "mean: 1.4197822262930055 usec\nrounds: 56206"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 76981.77688557499,
            "unit": "iter/sec",
            "range": "stddev: 0.000003991878212174758",
            "extra": "mean: 12.990087270736694 usec\nrounds: 42"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58494.0873289919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011668616092362576",
            "extra": "mean: 17.095744983174768 usec\nrounds: 23828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdandrutu@gmail.com",
            "name": "Bogdan Drutu",
            "username": "bogdandrutu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5fdcd6d7b2068e61c0c9749fc07ad1ef3401d2f",
          "message": "Add code.lineno, code.function and code.filepath to all logs (#3675)\n\nSigned-off-by: Bogdan Drutu <bogdandrutu@gmail.com>",
          "timestamp": "2024-02-07T17:37:46-06:00",
          "tree_id": "b5b67744641f965e314168f84a3688a043d00f2e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d5fdcd6d7b2068e61c0c9749fc07ad1ef3401d2f"
        },
        "date": 1707356960008,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 904511.9850569072,
            "unit": "iter/sec",
            "range": "stddev: 1.5497792875686505e-7",
            "extra": "mean: 1.1055685458242825 usec\nrounds: 29794"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 858723.9757861169,
            "unit": "iter/sec",
            "range": "stddev: 1.4029658929163293e-7",
            "extra": "mean: 1.1645185510100056 usec\nrounds: 99237"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 762756.8255130864,
            "unit": "iter/sec",
            "range": "stddev: 1.5345485485146335e-7",
            "extra": "mean: 1.3110338269701178 usec\nrounds: 120133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 672371.9301218514,
            "unit": "iter/sec",
            "range": "stddev: 3.7803576729822115e-7",
            "extra": "mean: 1.4872720814189462 usec\nrounds: 115880"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 562444.5412133388,
            "unit": "iter/sec",
            "range": "stddev: 1.6581081157251172e-7",
            "extra": "mean: 1.7779530722135564 usec\nrounds: 113720"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 891317.9923089527,
            "unit": "iter/sec",
            "range": "stddev: 2.695744459853847e-7",
            "extra": "mean: 1.12193404444749 usec\nrounds: 53135"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 860640.4983175999,
            "unit": "iter/sec",
            "range": "stddev: 1.1404469939037712e-7",
            "extra": "mean: 1.1619253357875017 usec\nrounds: 139883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 773311.0003038495,
            "unit": "iter/sec",
            "range": "stddev: 1.598661249008633e-7",
            "extra": "mean: 1.29314079278205 usec\nrounds: 136124"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 676201.1907079045,
            "unit": "iter/sec",
            "range": "stddev: 3.5547318822395585e-7",
            "extra": "mean: 1.4788498064505262 usec\nrounds: 129336"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 561072.1390168761,
            "unit": "iter/sec",
            "range": "stddev: 1.7191767255856748e-7",
            "extra": "mean: 1.7823020079953062 usec\nrounds: 126651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 904225.1346888354,
            "unit": "iter/sec",
            "range": "stddev: 1.7154140112769036e-7",
            "extra": "mean: 1.1059192690370445 usec\nrounds: 34205"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 869916.3978352463,
            "unit": "iter/sec",
            "range": "stddev: 1.401917531820854e-7",
            "extra": "mean: 1.1495357513531896 usec\nrounds: 132758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 780512.9516053252,
            "unit": "iter/sec",
            "range": "stddev: 1.84730816046461e-7",
            "extra": "mean: 1.281208720423208 usec\nrounds: 119279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 686758.9454749008,
            "unit": "iter/sec",
            "range": "stddev: 1.859700602541449e-7",
            "extra": "mean: 1.456114997247673 usec\nrounds: 130119"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574130.2631970065,
            "unit": "iter/sec",
            "range": "stddev: 1.9627387933296816e-7",
            "extra": "mean: 1.7417650036971852 usec\nrounds: 115407"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 779979.3413001233,
            "unit": "iter/sec",
            "range": "stddev: 2.1643835971570094e-7",
            "extra": "mean: 1.282085238736107 usec\nrounds: 3987"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 813580.0618153047,
            "unit": "iter/sec",
            "range": "stddev: 7.318285479850938e-8",
            "extra": "mean: 1.2291353327523107 usec\nrounds: 194448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 777253.9943012103,
            "unit": "iter/sec",
            "range": "stddev: 1.52737730318731e-7",
            "extra": "mean: 1.286580715354251 usec\nrounds: 153656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 816007.1366793162,
            "unit": "iter/sec",
            "range": "stddev: 7.646379280997219e-8",
            "extra": "mean: 1.2254794781200442 usec\nrounds: 190854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 820618.376582601,
            "unit": "iter/sec",
            "range": "stddev: 7.991732383884808e-8",
            "extra": "mean: 1.2185932322944306 usec\nrounds: 188973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 785857.7907630281,
            "unit": "iter/sec",
            "range": "stddev: 1.2283526496354726e-7",
            "extra": "mean: 1.272494860716531 usec\nrounds: 18063"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 823289.3891832769,
            "unit": "iter/sec",
            "range": "stddev: 7.740132803221705e-8",
            "extra": "mean: 1.2146397283123305 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 826123.7304864088,
            "unit": "iter/sec",
            "range": "stddev: 7.25415932598813e-8",
            "extra": "mean: 1.210472430577942 usec\nrounds: 189775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 822697.8874069701,
            "unit": "iter/sec",
            "range": "stddev: 7.594033417111464e-8",
            "extra": "mean: 1.215513027694603 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 790248.710251199,
            "unit": "iter/sec",
            "range": "stddev: 2.01603099757072e-7",
            "extra": "mean: 1.2654243999741888 usec\nrounds: 57816"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 758701.4902745656,
            "unit": "iter/sec",
            "range": "stddev: 2.3788308878203666e-7",
            "extra": "mean: 1.3180414337107882 usec\nrounds: 28995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 797931.5967367807,
            "unit": "iter/sec",
            "range": "stddev: 8.203081788636127e-8",
            "extra": "mean: 1.2532402577985353 usec\nrounds: 183170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 791266.7600601383,
            "unit": "iter/sec",
            "range": "stddev: 8.042809949244977e-8",
            "extra": "mean: 1.2637962953530328 usec\nrounds: 180340"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 793262.4010281549,
            "unit": "iter/sec",
            "range": "stddev: 8.32330605149366e-8",
            "extra": "mean: 1.2606169140298222 usec\nrounds: 184937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 759816.1622202393,
            "unit": "iter/sec",
            "range": "stddev: 1.5899801417297202e-7",
            "extra": "mean: 1.3161078293964237 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 748124.2703592106,
            "unit": "iter/sec",
            "range": "stddev: 1.9991072625694668e-7",
            "extra": "mean: 1.3366763245360984 usec\nrounds: 27565"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 756543.2334931722,
            "unit": "iter/sec",
            "range": "stddev: 1.8719051651856814e-7",
            "extra": "mean: 1.3218015253176207 usec\nrounds: 179797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 792738.8614917203,
            "unit": "iter/sec",
            "range": "stddev: 7.786007144173633e-8",
            "extra": "mean: 1.2614494489626384 usec\nrounds: 184429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 792250.4047621276,
            "unit": "iter/sec",
            "range": "stddev: 8.384134276083713e-8",
            "extra": "mean: 1.262227187249275 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 757253.7559614927,
            "unit": "iter/sec",
            "range": "stddev: 1.7399935559330927e-7",
            "extra": "mean: 1.3205612941863722 usec\nrounds: 198254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 705246.1967930577,
            "unit": "iter/sec",
            "range": "stddev: 1.5328386389008908e-7",
            "extra": "mean: 1.4179445483680257 usec\nrounds: 25606"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 734978.43430739,
            "unit": "iter/sec",
            "range": "stddev: 8.353685866316248e-8",
            "extra": "mean: 1.360584138692932 usec\nrounds: 170490"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 734957.6896179239,
            "unit": "iter/sec",
            "range": "stddev: 9.134822631951396e-8",
            "extra": "mean: 1.36062254212193 usec\nrounds: 166886"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 704494.2299802685,
            "unit": "iter/sec",
            "range": "stddev: 1.8451294030772747e-7",
            "extra": "mean: 1.4194580415910687 usec\nrounds: 190786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 748232.7655172296,
            "unit": "iter/sec",
            "range": "stddev: 8.102247828984792e-8",
            "extra": "mean: 1.3364825039554793 usec\nrounds: 168669"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72125.56852549184,
            "unit": "iter/sec",
            "range": "stddev: 0.000004134137019477719",
            "extra": "mean: 13.864708735662347 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58134.12228445392,
            "unit": "iter/sec",
            "range": "stddev: 7.52313310829823e-7",
            "extra": "mean: 17.20160141245338 usec\nrounds: 23708"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "941e3553611847baf93f59acc475ffe283150ef9",
          "message": "Fix explicit bucket histogram aggregation (#3429)\n\n* Fix explicit bucket histogram aggregation\r\n\r\nFixes #3407\r\n\r\n* Revert \"Fix explicit bucket histogram aggregation\"\r\n\r\nThis reverts commit f1c6683cbf48ad9acdfce8be24b1dbafaa7bc918.\r\n\r\n* Fix ExplicitBucketHistogramAggregation\r\n\r\nFixes #3407\r\n\r\n* Fix default instrument temporality\r\n\r\n* Fix last test case\r\n\r\n* Add more test cases\r\n\r\n* Test min, max and sum\r\n\r\n* Fix lint\r\n\r\n* Add CHANGELOG\r\n\r\n* Fix lint\r\n\r\n* Skip test if running in Windows",
          "timestamp": "2024-02-07T18:07:00-06:00",
          "tree_id": "dea95905cdb17a11fbcc590be3e29e69087d84f7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/941e3553611847baf93f59acc475ffe283150ef9"
        },
        "date": 1707357004274,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 917885.3150121801,
            "unit": "iter/sec",
            "range": "stddev: 6.807616476755769e-8",
            "extra": "mean: 1.0894607241719845 usec\nrounds: 31219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 871225.7344780054,
            "unit": "iter/sec",
            "range": "stddev: 4.801616166605935e-7",
            "extra": "mean: 1.1478081516946348 usec\nrounds: 93030"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 781843.183420147,
            "unit": "iter/sec",
            "range": "stddev: 1.8156391605012086e-7",
            "extra": "mean: 1.2790288656422548 usec\nrounds: 115209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682493.625889617,
            "unit": "iter/sec",
            "range": "stddev: 1.812220060458629e-7",
            "extra": "mean: 1.465215149367175 usec\nrounds: 104735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 575259.3707655474,
            "unit": "iter/sec",
            "range": "stddev: 1.931491976894414e-7",
            "extra": "mean: 1.7383463022413934 usec\nrounds: 108613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 918341.8515339319,
            "unit": "iter/sec",
            "range": "stddev: 1.1191476140060736e-7",
            "extra": "mean: 1.088919119094564 usec\nrounds: 53330"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870109.3146913555,
            "unit": "iter/sec",
            "range": "stddev: 1.575934324846737e-7",
            "extra": "mean: 1.1492808812818185 usec\nrounds: 126980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780675.4304565355,
            "unit": "iter/sec",
            "range": "stddev: 4.5561462619389456e-7",
            "extra": "mean: 1.2809420675826886 usec\nrounds: 133385"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681261.9512554937,
            "unit": "iter/sec",
            "range": "stddev: 1.3566807081695958e-7",
            "extra": "mean: 1.4678641573290654 usec\nrounds: 124046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 573165.2489593184,
            "unit": "iter/sec",
            "range": "stddev: 1.9012036944810994e-7",
            "extra": "mean: 1.7446975402219074 usec\nrounds: 120890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922717.2799562041,
            "unit": "iter/sec",
            "range": "stddev: 1.9742447232580333e-7",
            "extra": "mean: 1.0837555790084088 usec\nrounds: 37008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 873060.0947010281,
            "unit": "iter/sec",
            "range": "stddev: 1.486534896671283e-7",
            "extra": "mean: 1.1453965266187562 usec\nrounds: 128071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 786626.5970060829,
            "unit": "iter/sec",
            "range": "stddev: 4.4088592407503215e-7",
            "extra": "mean: 1.2712511931404566 usec\nrounds: 131522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 685593.5675516614,
            "unit": "iter/sec",
            "range": "stddev: 1.2896559759009883e-7",
            "extra": "mean: 1.4585901142146394 usec\nrounds: 117298"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 576168.8800505995,
            "unit": "iter/sec",
            "range": "stddev: 2.0317192125185653e-7",
            "extra": "mean: 1.7356022420235182 usec\nrounds: 124046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 672057.8243436196,
            "unit": "iter/sec",
            "range": "stddev: 1.5000845498922554e-7",
            "extra": "mean: 1.4879672012994902 usec\nrounds: 3982"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 658380.3117077398,
            "unit": "iter/sec",
            "range": "stddev: 1.7483174318113496e-7",
            "extra": "mean: 1.5188789552441961 usec\nrounds: 179137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 663450.7662740222,
            "unit": "iter/sec",
            "range": "stddev: 4.540305781650245e-7",
            "extra": "mean: 1.5072708493744877 usec\nrounds: 134656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 665204.901509014,
            "unit": "iter/sec",
            "range": "stddev: 1.6073857158451033e-7",
            "extra": "mean: 1.5032961990080127 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 662778.709426799,
            "unit": "iter/sec",
            "range": "stddev: 1.5154215203958457e-7",
            "extra": "mean: 1.5087992202779796 usec\nrounds: 185576"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 668262.2473328777,
            "unit": "iter/sec",
            "range": "stddev: 2.234805716393621e-7",
            "extra": "mean: 1.4964185153225866 usec\nrounds: 18007"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 662096.2297309912,
            "unit": "iter/sec",
            "range": "stddev: 3.93379394856815e-7",
            "extra": "mean: 1.5103544697819813 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 669477.5241734099,
            "unit": "iter/sec",
            "range": "stddev: 1.632500872161438e-7",
            "extra": "mean: 1.4937021242567916 usec\nrounds: 189440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 696557.9148473319,
            "unit": "iter/sec",
            "range": "stddev: 1.1817401288734311e-7",
            "extra": "mean: 1.4356308049692825 usec\nrounds: 167042"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 664930.4666527468,
            "unit": "iter/sec",
            "range": "stddev: 1.673234291752084e-7",
            "extra": "mean: 1.503916650163422 usec\nrounds: 190651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 667423.4782230187,
            "unit": "iter/sec",
            "range": "stddev: 2.344457217437636e-7",
            "extra": "mean: 1.498299104883828 usec\nrounds: 27469"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 654024.214724109,
            "unit": "iter/sec",
            "range": "stddev: 3.555059235534799e-7",
            "extra": "mean: 1.528995375839159 usec\nrounds: 189976"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 653638.2857411202,
            "unit": "iter/sec",
            "range": "stddev: 1.8145733734405217e-7",
            "extra": "mean: 1.5298981436899177 usec\nrounds: 180704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 650453.0897639293,
            "unit": "iter/sec",
            "range": "stddev: 1.778888884770925e-7",
            "extra": "mean: 1.5373898836623756 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 648411.7410229772,
            "unit": "iter/sec",
            "range": "stddev: 3.849275170997679e-7",
            "extra": "mean: 1.5422299393011205 usec\nrounds: 184810"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 664176.4769941984,
            "unit": "iter/sec",
            "range": "stddev: 2.5195144001732877e-7",
            "extra": "mean: 1.5056239337556894 usec\nrounds: 27360"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 640060.1110111595,
            "unit": "iter/sec",
            "range": "stddev: 5.015540492426435e-7",
            "extra": "mean: 1.5623532583841409 usec\nrounds: 193957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 650523.2713143701,
            "unit": "iter/sec",
            "range": "stddev: 1.9378826153716686e-7",
            "extra": "mean: 1.537224022715619 usec\nrounds: 140506"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 654810.1726121699,
            "unit": "iter/sec",
            "range": "stddev: 4.1980490082243096e-7",
            "extra": "mean: 1.5271601478193266 usec\nrounds: 178957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 650371.4599998199,
            "unit": "iter/sec",
            "range": "stddev: 2.0070629575508936e-7",
            "extra": "mean: 1.537582845348529 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 631264.52262137,
            "unit": "iter/sec",
            "range": "stddev: 1.9403060749069426e-7",
            "extra": "mean: 1.5841219713210402 usec\nrounds: 23183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 619598.3721417958,
            "unit": "iter/sec",
            "range": "stddev: 4.0572990822121505e-7",
            "extra": "mean: 1.6139487205933924 usec\nrounds: 175966"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 624811.8145579598,
            "unit": "iter/sec",
            "range": "stddev: 1.9736186154914302e-7",
            "extra": "mean: 1.6004818998300752 usec\nrounds: 174536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 625152.5366183327,
            "unit": "iter/sec",
            "range": "stddev: 1.9756484998992536e-7",
            "extra": "mean: 1.5996096015371661 usec\nrounds: 188244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 621398.622597395,
            "unit": "iter/sec",
            "range": "stddev: 4.20534394996949e-7",
            "extra": "mean: 1.6092729588296841 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72299.4479372677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040200635105804605",
            "extra": "mean: 13.831364256995066 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58639.675779030586,
            "unit": "iter/sec",
            "range": "stddev: 6.53665990289551e-7",
            "extra": "mean: 17.053300290544883 usec\nrounds: 18554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "941e3553611847baf93f59acc475ffe283150ef9",
          "message": "Fix explicit bucket histogram aggregation (#3429)\n\n* Fix explicit bucket histogram aggregation\r\n\r\nFixes #3407\r\n\r\n* Revert \"Fix explicit bucket histogram aggregation\"\r\n\r\nThis reverts commit f1c6683cbf48ad9acdfce8be24b1dbafaa7bc918.\r\n\r\n* Fix ExplicitBucketHistogramAggregation\r\n\r\nFixes #3407\r\n\r\n* Fix default instrument temporality\r\n\r\n* Fix last test case\r\n\r\n* Add more test cases\r\n\r\n* Test min, max and sum\r\n\r\n* Fix lint\r\n\r\n* Add CHANGELOG\r\n\r\n* Fix lint\r\n\r\n* Skip test if running in Windows",
          "timestamp": "2024-02-07T18:07:00-06:00",
          "tree_id": "dea95905cdb17a11fbcc590be3e29e69087d84f7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/941e3553611847baf93f59acc475ffe283150ef9"
        },
        "date": 1707357050909,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 924811.4919208132,
            "unit": "iter/sec",
            "range": "stddev: 1.4103625698270195e-7",
            "extra": "mean: 1.081301442224752 usec\nrounds: 32968"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 865046.2885653748,
            "unit": "iter/sec",
            "range": "stddev: 2.04848098819455e-7",
            "extra": "mean: 1.1560075029723988 usec\nrounds: 102849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 764663.2778617518,
            "unit": "iter/sec",
            "range": "stddev: 1.901552219271292e-7",
            "extra": "mean: 1.3077651679525222 usec\nrounds: 127040"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 672102.9928317341,
            "unit": "iter/sec",
            "range": "stddev: 2.6796628103705954e-7",
            "extra": "mean: 1.4878672028921573 usec\nrounds: 110764"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 571752.074823315,
            "unit": "iter/sec",
            "range": "stddev: 2.146580580658835e-7",
            "extra": "mean: 1.7490098314186684 usec\nrounds: 114717"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 911916.6088057698,
            "unit": "iter/sec",
            "range": "stddev: 2.1641918003613796e-7",
            "extra": "mean: 1.0965914978888067 usec\nrounds: 48683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 863530.7561021827,
            "unit": "iter/sec",
            "range": "stddev: 1.9917810283530243e-7",
            "extra": "mean: 1.1580363443148385 usec\nrounds: 130594"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 768018.047322171,
            "unit": "iter/sec",
            "range": "stddev: 2.7916652941957755e-7",
            "extra": "mean: 1.30205273624321 usec\nrounds: 137062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679729.5872025045,
            "unit": "iter/sec",
            "range": "stddev: 2.436372533394504e-7",
            "extra": "mean: 1.4711732707054885 usec\nrounds: 124305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 566214.7202813743,
            "unit": "iter/sec",
            "range": "stddev: 2.771456243112984e-7",
            "extra": "mean: 1.7661144512510392 usec\nrounds: 112152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 914857.1621879601,
            "unit": "iter/sec",
            "range": "stddev: 1.519918701262362e-7",
            "extra": "mean: 1.0930668101328664 usec\nrounds: 35628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 879121.6456303181,
            "unit": "iter/sec",
            "range": "stddev: 2.2435181760028684e-7",
            "extra": "mean: 1.1374990082095109 usec\nrounds: 132988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779657.3114020603,
            "unit": "iter/sec",
            "range": "stddev: 2.1019153536724512e-7",
            "extra": "mean: 1.28261479162133 usec\nrounds: 130056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 687069.9816839612,
            "unit": "iter/sec",
            "range": "stddev: 2.4127904975444414e-7",
            "extra": "mean: 1.4554558147760566 usec\nrounds: 120133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 570177.128367044,
            "unit": "iter/sec",
            "range": "stddev: 2.93335564198177e-7",
            "extra": "mean: 1.7538409561673318 usec\nrounds: 127463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 686117.7039033297,
            "unit": "iter/sec",
            "range": "stddev: 1.4454822136881224e-7",
            "extra": "mean: 1.4574758737618796 usec\nrounds: 3835"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 690828.6826633146,
            "unit": "iter/sec",
            "range": "stddev: 2.6254435310760927e-7",
            "extra": "mean: 1.4475368859103444 usec\nrounds: 192014"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 696484.3773634741,
            "unit": "iter/sec",
            "range": "stddev: 2.212424708877319e-7",
            "extra": "mean: 1.4357823843593986 usec\nrounds: 146526"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 696553.6432854086,
            "unit": "iter/sec",
            "range": "stddev: 2.7156203064521076e-7",
            "extra": "mean: 1.435639608865352 usec\nrounds: 189440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 692866.2038071962,
            "unit": "iter/sec",
            "range": "stddev: 2.731617592789881e-7",
            "extra": "mean: 1.443280094345993 usec\nrounds: 169414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 685199.5138327916,
            "unit": "iter/sec",
            "range": "stddev: 3.797729350962536e-7",
            "extra": "mean: 1.4594289397642928 usec\nrounds: 18019"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 687813.6471312173,
            "unit": "iter/sec",
            "range": "stddev: 2.5237151284185647e-7",
            "extra": "mean: 1.4538821731305742 usec\nrounds: 185448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 722958.676569804,
            "unit": "iter/sec",
            "range": "stddev: 1.2085372531859592e-7",
            "extra": "mean: 1.3832049222296687 usec\nrounds: 166112"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 687092.5335857687,
            "unit": "iter/sec",
            "range": "stddev: 2.455631546927873e-7",
            "extra": "mean: 1.4554080434861423 usec\nrounds: 187064"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 694425.1965155345,
            "unit": "iter/sec",
            "range": "stddev: 2.427189978294809e-7",
            "extra": "mean: 1.440039913611674 usec\nrounds: 198768"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 662362.8001764736,
            "unit": "iter/sec",
            "range": "stddev: 3.3399007382489615e-7",
            "extra": "mean: 1.5097466218416398 usec\nrounds: 26597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 667048.1473429844,
            "unit": "iter/sec",
            "range": "stddev: 2.443107632132562e-7",
            "extra": "mean: 1.4991421593527305 usec\nrounds: 182486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 697546.5075476756,
            "unit": "iter/sec",
            "range": "stddev: 1.20038659283396e-7",
            "extra": "mean: 1.4335961676815538 usec\nrounds: 158838"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 665656.1528419094,
            "unit": "iter/sec",
            "range": "stddev: 2.4278933948943e-7",
            "extra": "mean: 1.502277107678889 usec\nrounds: 183045"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 664942.1076889859,
            "unit": "iter/sec",
            "range": "stddev: 2.6565340806541966e-7",
            "extra": "mean: 1.5038903213326522 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 660354.8860069701,
            "unit": "iter/sec",
            "range": "stddev: 3.378670898711459e-7",
            "extra": "mean: 1.514337246820106 usec\nrounds: 28739"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 664992.5062966162,
            "unit": "iter/sec",
            "range": "stddev: 2.697401856807875e-7",
            "extra": "mean: 1.503776344141171 usec\nrounds: 197452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 694571.6083294197,
            "unit": "iter/sec",
            "range": "stddev: 1.385732860104884e-7",
            "extra": "mean: 1.439736361244588 usec\nrounds: 159309"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 665990.9105049805,
            "unit": "iter/sec",
            "range": "stddev: 2.930861122176237e-7",
            "extra": "mean: 1.5015219941091398 usec\nrounds: 173296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 665518.0432655109,
            "unit": "iter/sec",
            "range": "stddev: 2.678599875593376e-7",
            "extra": "mean: 1.5025888630957016 usec\nrounds: 198254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 631729.8598452284,
            "unit": "iter/sec",
            "range": "stddev: 2.7661283822466015e-7",
            "extra": "mean: 1.5829550945161854 usec\nrounds: 24642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 657850.5100507583,
            "unit": "iter/sec",
            "range": "stddev: 1.4132721881429288e-7",
            "extra": "mean: 1.5201021884483283 usec\nrounds: 197743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 623736.8532825889,
            "unit": "iter/sec",
            "range": "stddev: 2.4012254830414104e-7",
            "extra": "mean: 1.6032402041617737 usec\nrounds: 171087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 621996.2126989849,
            "unit": "iter/sec",
            "range": "stddev: 2.51894513116156e-7",
            "extra": "mean: 1.6077268311020247 usec\nrounds: 182796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 610617.960221326,
            "unit": "iter/sec",
            "range": "stddev: 2.713864040294845e-7",
            "extra": "mean: 1.6376852060452625 usec\nrounds: 188907"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72464.00743154995,
            "unit": "iter/sec",
            "range": "stddev: 0.000004128012046493246",
            "extra": "mean: 13.799954424886142 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59629.5586909967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010049882300919848",
            "extra": "mean: 16.77020628614827 usec\nrounds: 25173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdandrutu@gmail.com",
            "name": "Bogdan Drutu",
            "username": "bogdandrutu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9ee532eeadbfb57e68c87e0e215a8b9d428c890",
          "message": "[chore]: avoid unnecessary temporary variables (#3672)\n\nSigned-off-by: Bogdan Drutu <bogdandrutu@gmail.com>",
          "timestamp": "2024-02-07T18:20:13-06:00",
          "tree_id": "f1e0aef9f6f10038b7487c9ce9e692ce7eff7725",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b9ee532eeadbfb57e68c87e0e215a8b9d428c890"
        },
        "date": 1707357099345,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 931172.1858458044,
            "unit": "iter/sec",
            "range": "stddev: 1.7626995929279998e-7",
            "extra": "mean: 1.0739152384493507 usec\nrounds: 23109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 882320.5019932523,
            "unit": "iter/sec",
            "range": "stddev: 2.4027519508373023e-7",
            "extra": "mean: 1.1333750011938946 usec\nrounds: 92104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 784202.9072720018,
            "unit": "iter/sec",
            "range": "stddev: 2.522065822850953e-7",
            "extra": "mean: 1.275180174323364 usec\nrounds: 120591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 678255.8485632853,
            "unit": "iter/sec",
            "range": "stddev: 2.944196298120609e-7",
            "extra": "mean: 1.4743698887643193 usec\nrounds: 118935"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 567504.4296203399,
            "unit": "iter/sec",
            "range": "stddev: 3.9335515369737145e-7",
            "extra": "mean: 1.7621007833700955 usec\nrounds: 104674"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 925228.3135954102,
            "unit": "iter/sec",
            "range": "stddev: 1.823067230936976e-7",
            "extra": "mean: 1.080814308539726 usec\nrounds: 48657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 878930.8076201933,
            "unit": "iter/sec",
            "range": "stddev: 2.517855165004082e-7",
            "extra": "mean: 1.137745987886823 usec\nrounds: 136574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780802.6796294523,
            "unit": "iter/sec",
            "range": "stddev: 2.3267336761314795e-7",
            "extra": "mean: 1.2807333095662181 usec\nrounds: 131975"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 675376.170945733,
            "unit": "iter/sec",
            "range": "stddev: 2.2233828220209458e-7",
            "extra": "mean: 1.480656326088163 usec\nrounds: 117426"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568061.6395401148,
            "unit": "iter/sec",
            "range": "stddev: 2.587031539362149e-7",
            "extra": "mean: 1.7603723441166865 usec\nrounds: 127705"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 936061.4182654445,
            "unit": "iter/sec",
            "range": "stddev: 1.8867899472805936e-7",
            "extra": "mean: 1.0683059684833887 usec\nrounds: 35531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 892763.7407495569,
            "unit": "iter/sec",
            "range": "stddev: 2.1498974576266454e-7",
            "extra": "mean: 1.120117175861565 usec\nrounds: 137273"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 773444.855299929,
            "unit": "iter/sec",
            "range": "stddev: 2.8312376922344493e-7",
            "extra": "mean: 1.2929169974402592 usec\nrounds: 131169"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684879.3746215525,
            "unit": "iter/sec",
            "range": "stddev: 2.5640248092109284e-7",
            "extra": "mean: 1.4601111335154096 usec\nrounds: 123249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 569498.0344286399,
            "unit": "iter/sec",
            "range": "stddev: 2.578507549899818e-7",
            "extra": "mean: 1.7559323115193355 usec\nrounds: 124133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 700254.4049746953,
            "unit": "iter/sec",
            "range": "stddev: 3.571432958342843e-7",
            "extra": "mean: 1.428052423370527 usec\nrounds: 3729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 697913.1953327826,
            "unit": "iter/sec",
            "range": "stddev: 2.727876941548607e-7",
            "extra": "mean: 1.4328429476436177 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 699311.8414278094,
            "unit": "iter/sec",
            "range": "stddev: 2.458110984031632e-7",
            "extra": "mean: 1.4299772158272983 usec\nrounds: 151488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 729278.0430657772,
            "unit": "iter/sec",
            "range": "stddev: 1.1314647816923141e-7",
            "extra": "mean: 1.3712191248706018 usec\nrounds: 167930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 722905.135231877,
            "unit": "iter/sec",
            "range": "stddev: 1.3225857362258828e-7",
            "extra": "mean: 1.3833073680950503 usec\nrounds: 198401"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 685611.6426336286,
            "unit": "iter/sec",
            "range": "stddev: 3.256733980953897e-7",
            "extra": "mean: 1.4585516607604805 usec\nrounds: 17587"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 701196.2851112674,
            "unit": "iter/sec",
            "range": "stddev: 2.7423087421317335e-7",
            "extra": "mean: 1.4261341955645384 usec\nrounds: 181991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 724405.2633165135,
            "unit": "iter/sec",
            "range": "stddev: 1.646685034479734e-7",
            "extra": "mean: 1.3804427585489216 usec\nrounds: 171525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 693838.8315193589,
            "unit": "iter/sec",
            "range": "stddev: 3.2146481238725574e-7",
            "extra": "mean: 1.4412568950778 usec\nrounds: 169094"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 696401.6286681942,
            "unit": "iter/sec",
            "range": "stddev: 2.62078185034786e-7",
            "extra": "mean: 1.4359529886689244 usec\nrounds: 190448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 686265.0319927237,
            "unit": "iter/sec",
            "range": "stddev: 2.546118832569622e-7",
            "extra": "mean: 1.4571629813284772 usec\nrounds: 26156"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 679148.00947517,
            "unit": "iter/sec",
            "range": "stddev: 2.553642877911724e-7",
            "extra": "mean: 1.4724330868212028 usec\nrounds: 192634"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 710027.3749757451,
            "unit": "iter/sec",
            "range": "stddev: 1.4492197729301236e-7",
            "extra": "mean: 1.4083964016657253 usec\nrounds: 167668"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 685245.6220578679,
            "unit": "iter/sec",
            "range": "stddev: 2.6936535494985006e-7",
            "extra": "mean: 1.4593307389500572 usec\nrounds: 177244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 680752.113321489,
            "unit": "iter/sec",
            "range": "stddev: 2.095781519455631e-7",
            "extra": "mean: 1.4689634896920905 usec\nrounds: 185065"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 675455.1397521838,
            "unit": "iter/sec",
            "range": "stddev: 3.591055829035759e-7",
            "extra": "mean: 1.4804832196063942 usec\nrounds: 26797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 710278.6880370221,
            "unit": "iter/sec",
            "range": "stddev: 1.1706045780653037e-7",
            "extra": "mean: 1.4078980783777604 usec\nrounds: 161611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 710966.4855185022,
            "unit": "iter/sec",
            "range": "stddev: 1.6364401922753427e-7",
            "extra": "mean: 1.4065360609378204 usec\nrounds: 160069"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 683195.3296287666,
            "unit": "iter/sec",
            "range": "stddev: 2.999505704661692e-7",
            "extra": "mean: 1.4637102401495898 usec\nrounds: 174479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 712873.540821658,
            "unit": "iter/sec",
            "range": "stddev: 1.4006379480374546e-7",
            "extra": "mean: 1.402773343007513 usec\nrounds: 158557"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 643343.632977888,
            "unit": "iter/sec",
            "range": "stddev: 2.676018255425352e-7",
            "extra": "mean: 1.5543792597608104 usec\nrounds: 23744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 639051.7686064444,
            "unit": "iter/sec",
            "range": "stddev: 2.462718376741926e-7",
            "extra": "mean: 1.5648184530975664 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 628833.7708078369,
            "unit": "iter/sec",
            "range": "stddev: 2.699233392034972e-7",
            "extra": "mean: 1.5902453818842157 usec\nrounds: 176197"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 626443.8130077654,
            "unit": "iter/sec",
            "range": "stddev: 2.586131693896136e-7",
            "extra": "mean: 1.5963123575259954 usec\nrounds: 176429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 627503.1209220603,
            "unit": "iter/sec",
            "range": "stddev: 2.8635025186911624e-7",
            "extra": "mean: 1.593617572021934 usec\nrounds: 176429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72932.58126134421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040589214672654265",
            "extra": "mean: 13.711293124490314 usec\nrounds: 36"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59077.54215211264,
            "unit": "iter/sec",
            "range": "stddev: 0.000001026269110106063",
            "extra": "mean: 16.926905953961384 usec\nrounds: 25151"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdandrutu@gmail.com",
            "name": "Bogdan Drutu",
            "username": "bogdandrutu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9ee532eeadbfb57e68c87e0e215a8b9d428c890",
          "message": "[chore]: avoid unnecessary temporary variables (#3672)\n\nSigned-off-by: Bogdan Drutu <bogdandrutu@gmail.com>",
          "timestamp": "2024-02-07T18:20:13-06:00",
          "tree_id": "f1e0aef9f6f10038b7487c9ce9e692ce7eff7725",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b9ee532eeadbfb57e68c87e0e215a8b9d428c890"
        },
        "date": 1707357143442,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 913349.3425415397,
            "unit": "iter/sec",
            "range": "stddev: 1.458637354512132e-7",
            "extra": "mean: 1.094871319682939 usec\nrounds: 34707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 878564.673842291,
            "unit": "iter/sec",
            "range": "stddev: 1.5423876987230975e-7",
            "extra": "mean: 1.1382201331025832 usec\nrounds: 94370"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 756269.5429568068,
            "unit": "iter/sec",
            "range": "stddev: 2.3863577646876656e-7",
            "extra": "mean: 1.322279879327513 usec\nrounds: 112552"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 660029.1390533407,
            "unit": "iter/sec",
            "range": "stddev: 2.5121821834345655e-7",
            "extra": "mean: 1.5150846240429159 usec\nrounds: 108350"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 568384.7736430471,
            "unit": "iter/sec",
            "range": "stddev: 2.470033566729337e-7",
            "extra": "mean: 1.7593715496467761 usec\nrounds: 102692"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 916938.3632476048,
            "unit": "iter/sec",
            "range": "stddev: 1.693466531606864e-7",
            "extra": "mean: 1.0905858453322947 usec\nrounds: 50558"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 863807.0775067883,
            "unit": "iter/sec",
            "range": "stddev: 2.4682124554737365e-7",
            "extra": "mean: 1.157665902537296 usec\nrounds: 129367"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 765365.2954546257,
            "unit": "iter/sec",
            "range": "stddev: 2.1420811709280946e-7",
            "extra": "mean: 1.3065656438028086 usec\nrounds: 117813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 674331.8419957999,
            "unit": "iter/sec",
            "range": "stddev: 2.229702329670259e-7",
            "extra": "mean: 1.482949399275481 usec\nrounds: 122995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 567823.3860781206,
            "unit": "iter/sec",
            "range": "stddev: 2.5393848276154536e-7",
            "extra": "mean: 1.7611109801356808 usec\nrounds: 112270"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922807.6085282455,
            "unit": "iter/sec",
            "range": "stddev: 1.7319134372617165e-7",
            "extra": "mean: 1.0836494961228873 usec\nrounds: 37291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880342.1242922086,
            "unit": "iter/sec",
            "range": "stddev: 2.0007720194546745e-7",
            "extra": "mean: 1.1359220153232992 usec\nrounds: 140801"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 768423.4249506544,
            "unit": "iter/sec",
            "range": "stddev: 2.4912158195726154e-7",
            "extra": "mean: 1.3013658453530574 usec\nrounds: 122939"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 676885.0702050574,
            "unit": "iter/sec",
            "range": "stddev: 2.0178394955161187e-7",
            "extra": "mean: 1.477355675309927 usec\nrounds: 122742"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 569293.8904067876,
            "unit": "iter/sec",
            "range": "stddev: 2.499280795462661e-7",
            "extra": "mean: 1.7565619741421294 usec\nrounds: 108635"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 672538.6797878126,
            "unit": "iter/sec",
            "range": "stddev: 3.714548628258362e-7",
            "extra": "mean: 1.486903326237685 usec\nrounds: 3798"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 670315.852578828,
            "unit": "iter/sec",
            "range": "stddev: 2.406217961940766e-7",
            "extra": "mean: 1.4918340304094206 usec\nrounds: 181253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 692161.472402011,
            "unit": "iter/sec",
            "range": "stddev: 2.338706560164047e-7",
            "extra": "mean: 1.4447495849916288 usec\nrounds: 146927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 695566.923822259,
            "unit": "iter/sec",
            "range": "stddev: 2.6049127411866544e-7",
            "extra": "mean: 1.4376761829110982 usec\nrounds: 192290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 687244.9003666176,
            "unit": "iter/sec",
            "range": "stddev: 2.8873543617066e-7",
            "extra": "mean: 1.4550853698100052 usec\nrounds: 193120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 684835.516566125,
            "unit": "iter/sec",
            "range": "stddev: 2.419796776644917e-7",
            "extra": "mean: 1.460204641567307 usec\nrounds: 16757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 687810.4270943272,
            "unit": "iter/sec",
            "range": "stddev: 2.3444261211392156e-7",
            "extra": "mean: 1.4538889795906784 usec\nrounds: 183295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 695526.5553552909,
            "unit": "iter/sec",
            "range": "stddev: 2.502341961663701e-7",
            "extra": "mean: 1.43775962585523 usec\nrounds: 198181"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 697468.585176639,
            "unit": "iter/sec",
            "range": "stddev: 2.3854576840602675e-7",
            "extra": "mean: 1.4337563314722521 usec\nrounds: 176024"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 696786.4779165228,
            "unit": "iter/sec",
            "range": "stddev: 2.340802944680024e-7",
            "extra": "mean: 1.435159882823965 usec\nrounds: 193537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 669198.403902246,
            "unit": "iter/sec",
            "range": "stddev: 3.6145168871731994e-7",
            "extra": "mean: 1.494325142093549 usec\nrounds: 24351"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 666610.2561960919,
            "unit": "iter/sec",
            "range": "stddev: 2.7525538401010937e-7",
            "extra": "mean: 1.5001269342994286 usec\nrounds: 170220"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 663714.7364345082,
            "unit": "iter/sec",
            "range": "stddev: 3.085410374246544e-7",
            "extra": "mean: 1.506671383209034 usec\nrounds: 185512"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 656993.240809699,
            "unit": "iter/sec",
            "range": "stddev: 2.872729053489261e-7",
            "extra": "mean: 1.5220856743785807 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 662089.141133084,
            "unit": "iter/sec",
            "range": "stddev: 2.9226383846544947e-7",
            "extra": "mean: 1.5103706402564212 usec\nrounds: 169307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 671619.9419724774,
            "unit": "iter/sec",
            "range": "stddev: 3.1263508126180764e-7",
            "extra": "mean: 1.4889373252722435 usec\nrounds: 26494"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 681245.1881898904,
            "unit": "iter/sec",
            "range": "stddev: 2.8458232650032075e-7",
            "extra": "mean: 1.4679002763411222 usec\nrounds: 189775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 708270.9025961213,
            "unit": "iter/sec",
            "range": "stddev: 1.2265306635965994e-7",
            "extra": "mean: 1.4118891462780194 usec\nrounds: 161953"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 683334.5934556965,
            "unit": "iter/sec",
            "range": "stddev: 2.2961854462962553e-7",
            "extra": "mean: 1.463411935495454 usec\nrounds: 181806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 680006.3296938258,
            "unit": "iter/sec",
            "range": "stddev: 2.6811210717380195e-7",
            "extra": "mean: 1.4705745466373115 usec\nrounds: 194872"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 632088.6082637201,
            "unit": "iter/sec",
            "range": "stddev: 1.694343736282762e-7",
            "extra": "mean: 1.5820566720018785 usec\nrounds: 24000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 636016.916877954,
            "unit": "iter/sec",
            "range": "stddev: 2.4837160457333065e-7",
            "extra": "mean: 1.5722852230232283 usec\nrounds: 172572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 626817.9525400245,
            "unit": "iter/sec",
            "range": "stddev: 2.8862190576376895e-7",
            "extra": "mean: 1.5953595393171933 usec\nrounds: 160500"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 624471.802764339,
            "unit": "iter/sec",
            "range": "stddev: 3.268633066979356e-7",
            "extra": "mean: 1.6013533286424089 usec\nrounds: 167406"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 625312.2719641053,
            "unit": "iter/sec",
            "range": "stddev: 2.7214037662440335e-7",
            "extra": "mean: 1.5992009829888687 usec\nrounds: 154318"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73280.66641187436,
            "unit": "iter/sec",
            "range": "stddev: 0.000004242582264829515",
            "extra": "mean: 13.646164110728673 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58348.940486232685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010668023394825833",
            "extra": "mean: 17.138271777804572 usec\nrounds: 10985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pegasashjy@gmail.com",
            "name": "John Huang",
            "username": "pegasas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d03a62245357eb40cac81d5e671fc2df83aef767",
          "message": "Logs: ObservedTimestamp field is missing in console exporter output (#3564)\n\n* ObservedTimestamp field is not set\r\n\r\n* Update CHANGELOG.md \r\n\r\nunrelease\r\n\r\n---------\r\n\r\nCo-authored-by: Srikanth Chekuri <srikanth.chekuri92@gmail.com>",
          "timestamp": "2024-02-07T18:41:06-06:00",
          "tree_id": "2b4e7c64d7306d6f75bfe4665ddd04ce42f6bb95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d03a62245357eb40cac81d5e671fc2df83aef767"
        },
        "date": 1707357192390,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 906571.9441342674,
            "unit": "iter/sec",
            "range": "stddev: 1.6360685536966886e-7",
            "extra": "mean: 1.10305641650421 usec\nrounds: 34499"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 850375.5995654518,
            "unit": "iter/sec",
            "range": "stddev: 1.2129895889878932e-7",
            "extra": "mean: 1.175950956860718 usec\nrounds: 95716"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767538.1559043211,
            "unit": "iter/sec",
            "range": "stddev: 9.974338652302412e-8",
            "extra": "mean: 1.3028668246750417 usec\nrounds: 127040"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 669937.4968693629,
            "unit": "iter/sec",
            "range": "stddev: 1.6161418293450072e-7",
            "extra": "mean: 1.4926765626241683 usec\nrounds: 106375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 560575.2606701535,
            "unit": "iter/sec",
            "range": "stddev: 1.7529906101344733e-7",
            "extra": "mean: 1.783881791009695 usec\nrounds: 113121"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 896926.6204394453,
            "unit": "iter/sec",
            "range": "stddev: 8.266010713648286e-8",
            "extra": "mean: 1.1149184082751993 usec\nrounds: 49106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 858482.415758242,
            "unit": "iter/sec",
            "range": "stddev: 1.3470453222969038e-7",
            "extra": "mean: 1.1648462235732164 usec\nrounds: 136644"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 765275.6963984733,
            "unit": "iter/sec",
            "range": "stddev: 1.4771580242974777e-7",
            "extra": "mean: 1.3067186174945602 usec\nrounds: 136539"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 671642.546575073,
            "unit": "iter/sec",
            "range": "stddev: 1.6286247997885977e-7",
            "extra": "mean: 1.4888872140386729 usec\nrounds: 120863"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 559871.2123411135,
            "unit": "iter/sec",
            "range": "stddev: 1.3515613664692534e-7",
            "extra": "mean: 1.786125055114869 usec\nrounds: 123875"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 907857.6126782914,
            "unit": "iter/sec",
            "range": "stddev: 1.4579308730362376e-7",
            "extra": "mean: 1.1014943158871326 usec\nrounds: 35358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 856760.2980833919,
            "unit": "iter/sec",
            "range": "stddev: 1.0871785411331929e-7",
            "extra": "mean: 1.1671876045575889 usec\nrounds: 133385"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 761466.9833975885,
            "unit": "iter/sec",
            "range": "stddev: 1.177035046058142e-7",
            "extra": "mean: 1.3132545754486966 usec\nrounds: 134927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 668587.8692801098,
            "unit": "iter/sec",
            "range": "stddev: 1.281913518093266e-7",
            "extra": "mean: 1.4956897155144804 usec\nrounds: 127040"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 563573.8324555416,
            "unit": "iter/sec",
            "range": "stddev: 1.5584562598682758e-7",
            "extra": "mean: 1.7743904035482108 usec\nrounds: 122350"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 678874.8383571001,
            "unit": "iter/sec",
            "range": "stddev: 2.155547494663433e-7",
            "extra": "mean: 1.473025576290371 usec\nrounds: 3791"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 682400.8568154598,
            "unit": "iter/sec",
            "range": "stddev: 1.6909891720824817e-7",
            "extra": "mean: 1.4654143382332063 usec\nrounds: 197017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 670928.2126566764,
            "unit": "iter/sec",
            "range": "stddev: 1.6218401498983194e-7",
            "extra": "mean: 1.4904724248221684 usec\nrounds: 142067"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 682097.3962767841,
            "unit": "iter/sec",
            "range": "stddev: 1.636471212793053e-7",
            "extra": "mean: 1.466066291204865 usec\nrounds: 188575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 715671.6207836535,
            "unit": "iter/sec",
            "range": "stddev: 9.537647037379211e-8",
            "extra": "mean: 1.3972888835594874 usec\nrounds: 155300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 679564.2290084286,
            "unit": "iter/sec",
            "range": "stddev: 1.4732982838287427e-7",
            "extra": "mean: 1.4715312509299205 usec\nrounds: 16260"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 686404.5697080368,
            "unit": "iter/sec",
            "range": "stddev: 1.6659651954131257e-7",
            "extra": "mean: 1.4568667577859389 usec\nrounds: 180219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 716036.9752316149,
            "unit": "iter/sec",
            "range": "stddev: 9.631794125191841e-8",
            "extra": "mean: 1.396575923577874 usec\nrounds: 165958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 687077.2012280184,
            "unit": "iter/sec",
            "range": "stddev: 2.878664741570521e-7",
            "extra": "mean: 1.4554405214038426 usec\nrounds: 196729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 721670.0190246104,
            "unit": "iter/sec",
            "range": "stddev: 7.520697686100689e-8",
            "extra": "mean: 1.385674856427558 usec\nrounds: 163831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 674952.1303169811,
            "unit": "iter/sec",
            "range": "stddev: 1.3583214737143686e-7",
            "extra": "mean: 1.481586552709101 usec\nrounds: 26086"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 700874.7534246938,
            "unit": "iter/sec",
            "range": "stddev: 9.107552876966006e-8",
            "extra": "mean: 1.4267884456012805 usec\nrounds: 199063"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 672441.6703907584,
            "unit": "iter/sec",
            "range": "stddev: 1.659712066784623e-7",
            "extra": "mean: 1.4871178334604043 usec\nrounds: 199804"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 704996.2680891107,
            "unit": "iter/sec",
            "range": "stddev: 7.493706228983808e-8",
            "extra": "mean: 1.4184472248491407 usec\nrounds: 159736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 664130.9900614921,
            "unit": "iter/sec",
            "range": "stddev: 1.737381046765507e-7",
            "extra": "mean: 1.505727055301861 usec\nrounds: 180461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 667440.8620065064,
            "unit": "iter/sec",
            "range": "stddev: 1.4099353753339662e-7",
            "extra": "mean: 1.4982600810410849 usec\nrounds: 25238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 667429.2531521432,
            "unit": "iter/sec",
            "range": "stddev: 2.1283683459515782e-7",
            "extra": "mean: 1.4982861408564092 usec\nrounds: 181806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 668982.3530669418,
            "unit": "iter/sec",
            "range": "stddev: 1.584832631688042e-7",
            "extra": "mean: 1.4948077410644862 usec\nrounds: 181376"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 664972.4723244229,
            "unit": "iter/sec",
            "range": "stddev: 1.7963320570196726e-7",
            "extra": "mean: 1.503821649194714 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 702193.9351345819,
            "unit": "iter/sec",
            "range": "stddev: 6.776564911446896e-8",
            "extra": "mean: 1.4241079991788035 usec\nrounds: 165958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 628626.1705197582,
            "unit": "iter/sec",
            "range": "stddev: 1.7278477428079446e-7",
            "extra": "mean: 1.5907705515555992 usec\nrounds: 24872"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 626035.9714005793,
            "unit": "iter/sec",
            "range": "stddev: 1.6317560721697875e-7",
            "extra": "mean: 1.597352301917702 usec\nrounds: 197452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 621384.4245277779,
            "unit": "iter/sec",
            "range": "stddev: 1.8415729144047545e-7",
            "extra": "mean: 1.6093097292548837 usec\nrounds: 195653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 619044.2445000969,
            "unit": "iter/sec",
            "range": "stddev: 1.6590076100138448e-7",
            "extra": "mean: 1.615393421204554 usec\nrounds: 187259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 618569.3227601739,
            "unit": "iter/sec",
            "range": "stddev: 2.0352806255326846e-7",
            "extra": "mean: 1.6166336790479843 usec\nrounds: 175793"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66888.60936487708,
            "unit": "iter/sec",
            "range": "stddev: 0.000005196240563428632",
            "extra": "mean: 14.950228588921682 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59114.281745764005,
            "unit": "iter/sec",
            "range": "stddev: 6.565699142855358e-7",
            "extra": "mean: 16.916385862569626 usec\nrounds: 21966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pegasashjy@gmail.com",
            "name": "John Huang",
            "username": "pegasas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d03a62245357eb40cac81d5e671fc2df83aef767",
          "message": "Logs: ObservedTimestamp field is missing in console exporter output (#3564)\n\n* ObservedTimestamp field is not set\r\n\r\n* Update CHANGELOG.md \r\n\r\nunrelease\r\n\r\n---------\r\n\r\nCo-authored-by: Srikanth Chekuri <srikanth.chekuri92@gmail.com>",
          "timestamp": "2024-02-07T18:41:06-06:00",
          "tree_id": "2b4e7c64d7306d6f75bfe4665ddd04ce42f6bb95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d03a62245357eb40cac81d5e671fc2df83aef767"
        },
        "date": 1707357240672,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 878616.3924783665,
            "unit": "iter/sec",
            "range": "stddev: 7.341040698055962e-8",
            "extra": "mean: 1.1381531332226107 usec\nrounds: 32534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 833773.3987802747,
            "unit": "iter/sec",
            "range": "stddev: 1.708091563688524e-7",
            "extra": "mean: 1.19936664022011 usec\nrounds: 94904"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 744457.372871588,
            "unit": "iter/sec",
            "range": "stddev: 1.7163291834184077e-7",
            "extra": "mean: 1.3432602543013443 usec\nrounds: 117916"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 656735.8394875253,
            "unit": "iter/sec",
            "range": "stddev: 1.3860781741746698e-7",
            "extra": "mean: 1.5226822412803542 usec\nrounds: 108635"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 549847.4033019572,
            "unit": "iter/sec",
            "range": "stddev: 2.801659304837305e-7",
            "extra": "mean: 1.8186864100744595 usec\nrounds: 108088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 863495.4992768292,
            "unit": "iter/sec",
            "range": "stddev: 1.2919271607038993e-7",
            "extra": "mean: 1.1580836273466304 usec\nrounds: 54968"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 836975.3810670979,
            "unit": "iter/sec",
            "range": "stddev: 1.485502407266492e-7",
            "extra": "mean: 1.1947782725999117 usec\nrounds: 135062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 743744.6771963084,
            "unit": "iter/sec",
            "range": "stddev: 1.457191323782576e-7",
            "extra": "mean: 1.3445474376632804 usec\nrounds: 127191"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 660532.6406017849,
            "unit": "iter/sec",
            "range": "stddev: 1.4244200458133154e-7",
            "extra": "mean: 1.5139297266050922 usec\nrounds: 122714"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 556746.1909633353,
            "unit": "iter/sec",
            "range": "stddev: 3.8860700636573784e-7",
            "extra": "mean: 1.7961505911153244 usec\nrounds: 114619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 871858.1323022116,
            "unit": "iter/sec",
            "range": "stddev: 5.3847476294069225e-8",
            "extra": "mean: 1.1469755949393046 usec\nrounds: 35766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 842117.4191725214,
            "unit": "iter/sec",
            "range": "stddev: 1.3085115109826078e-7",
            "extra": "mean: 1.1874828583674433 usec\nrounds: 130913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 747186.0586604171,
            "unit": "iter/sec",
            "range": "stddev: 1.6220640056834308e-7",
            "extra": "mean: 1.3383547356234633 usec\nrounds: 127131"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 658352.2353961089,
            "unit": "iter/sec",
            "range": "stddev: 1.223192596893955e-7",
            "extra": "mean: 1.5189437298687576 usec\nrounds: 123334"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 557082.2579811064,
            "unit": "iter/sec",
            "range": "stddev: 3.67166414708478e-7",
            "extra": "mean: 1.795067040232172 usec\nrounds: 124825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 651670.9959078399,
            "unit": "iter/sec",
            "range": "stddev: 1.1476838672538349e-7",
            "extra": "mean: 1.5345166599088924 usec\nrounds: 3892"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 665749.1876625755,
            "unit": "iter/sec",
            "range": "stddev: 1.5732369466497443e-7",
            "extra": "mean: 1.5020671726404482 usec\nrounds: 191877"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 660928.161726833,
            "unit": "iter/sec",
            "range": "stddev: 1.9135393765184992e-7",
            "extra": "mean: 1.5130237413204797 usec\nrounds: 129274"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 667682.7115822383,
            "unit": "iter/sec",
            "range": "stddev: 3.042510010727968e-7",
            "extra": "mean: 1.4977173778099695 usec\nrounds: 199655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 706095.0130058939,
            "unit": "iter/sec",
            "range": "stddev: 1.0390692526159956e-7",
            "extra": "mean: 1.4162399982729417 usec\nrounds: 167878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 665414.338455473,
            "unit": "iter/sec",
            "range": "stddev: 1.8858096691886298e-7",
            "extra": "mean: 1.5028230415370232 usec\nrounds: 17391"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 667809.0630254511,
            "unit": "iter/sec",
            "range": "stddev: 1.4412539171899385e-7",
            "extra": "mean: 1.4974340052672939 usec\nrounds: 198035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 697813.1938248869,
            "unit": "iter/sec",
            "range": "stddev: 1.0303148031072987e-7",
            "extra": "mean: 1.4330482840525733 usec\nrounds: 169735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 699481.2010498587,
            "unit": "iter/sec",
            "range": "stddev: 1.1729393815813578e-7",
            "extra": "mean: 1.4296309872218 usec\nrounds: 168035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 664966.8328604028,
            "unit": "iter/sec",
            "range": "stddev: 1.87650240123795e-7",
            "extra": "mean: 1.5038344028354433 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 657146.7282854065,
            "unit": "iter/sec",
            "range": "stddev: 1.1957879439704964e-7",
            "extra": "mean: 1.5217301661215732 usec\nrounds: 24691"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 679643.2092533621,
            "unit": "iter/sec",
            "range": "stddev: 1.0137598640930761e-7",
            "extra": "mean: 1.4713602466484887 usec\nrounds: 194519"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 648839.3710720032,
            "unit": "iter/sec",
            "range": "stddev: 1.7423656414882573e-7",
            "extra": "mean: 1.541213503039765 usec\nrounds: 199358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 653037.0320839284,
            "unit": "iter/sec",
            "range": "stddev: 1.8380346434991964e-7",
            "extra": "mean: 1.5313067266780667 usec\nrounds: 179316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 651315.2512045725,
            "unit": "iter/sec",
            "range": "stddev: 1.999695918340815e-7",
            "extra": "mean: 1.5353548042220015 usec\nrounds: 192981"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 653285.4890409888,
            "unit": "iter/sec",
            "range": "stddev: 1.3131705453502047e-7",
            "extra": "mean: 1.53072434146361 usec\nrounds: 26507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 646741.0288941643,
            "unit": "iter/sec",
            "range": "stddev: 2.3793586128846143e-7",
            "extra": "mean: 1.5462139485875184 usec\nrounds: 183609"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 670704.3915487895,
            "unit": "iter/sec",
            "range": "stddev: 9.49719300253486e-8",
            "extra": "mean: 1.4909698111425842 usec\nrounds: 199655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 651526.2223832601,
            "unit": "iter/sec",
            "range": "stddev: 1.7046780242371292e-7",
            "extra": "mean: 1.5348576398690983 usec\nrounds: 188973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 655410.8536644495,
            "unit": "iter/sec",
            "range": "stddev: 1.6900055296836108e-7",
            "extra": "mean: 1.5257605125226834 usec\nrounds: 186803"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 624710.4612372469,
            "unit": "iter/sec",
            "range": "stddev: 1.5976621134704634e-7",
            "extra": "mean: 1.6007415627705153 usec\nrounds: 23119"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 630227.8186274176,
            "unit": "iter/sec",
            "range": "stddev: 1.9535664227937488e-7",
            "extra": "mean: 1.586727799762814 usec\nrounds: 176024"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 620124.421380086,
            "unit": "iter/sec",
            "range": "stddev: 1.97338116079132e-7",
            "extra": "mean: 1.6125796139015156 usec\nrounds: 176081"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 616906.2972287287,
            "unit": "iter/sec",
            "range": "stddev: 1.7893552849262268e-7",
            "extra": "mean: 1.6209917202858974 usec\nrounds: 168775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 615212.6088187187,
            "unit": "iter/sec",
            "range": "stddev: 1.99329512984592e-7",
            "extra": "mean: 1.6254543318286645 usec\nrounds: 164735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72489.38889038913,
            "unit": "iter/sec",
            "range": "stddev: 0.000004116068692154941",
            "extra": "mean: 13.795122504234314 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58003.78585437578,
            "unit": "iter/sec",
            "range": "stddev: 7.304529521013344e-7",
            "extra": "mean: 17.240253981190097 usec\nrounds: 17540"
          }
        ]
      }
    ]
  }
}