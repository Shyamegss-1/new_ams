import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="row g-3 mb-3">
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100 ecommerce-card-min-width">
                        <div className="card-header pb-0">
                            <h6 className="mb-0 mt-2 d-flex align-items-center">
                                Weekly Sales
                                <span
                                    className="ms-1 text-400"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    aria-label="Calculated according to last week's sales"
                                    data-bs-original-title="Calculated according to last week's sales"
                                >
                                    <svg
                                        className="svg-inline--fa fa-question-circle fa-w-16"
                                        data-fa-transform="shrink-1"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="question-circle"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                        style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                        <g transform="translate(256 256)">
                                            <g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)">
                                                <path
                                                    fill="currentColor"
                                                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                                                    transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    {/* <span class="far fa-question-circle" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com */}
                                </span>
                            </h6>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row">
                                <div className="col">
                                    <p className="font-sans-serif lh-1 mb-1 fs-5">$47K</p>
                                    <span className="badge badge-subtle-success rounded-pill fs-11">
                                        +3.5%
                                    </span>
                                </div>
                                <div className="col-auto ps-0">
                                    <div
                                        className="echart-bar-weekly-sales h-100"
                                        style={{
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            position: "relative"
                                        }}
                                        _echarts_instance_="ec_1723181238196"
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 136,
                                                height: 61,
                                                padding: 0,
                                                margin: 0,
                                                borderWidth: 0,
                                                cursor: "pointer"
                                            }}
                                        >
                                            <canvas
                                                data-zr-dom-id="zr_0"
                                                width={136}
                                                height={61}
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    width: 136,
                                                    height: 61,
                                                    userSelect: "none",
                                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                    padding: 0,
                                                    margin: 0,
                                                    borderWidth: 0
                                                }}
                                            />
                                        </div>
                                        <div
                                            className=""
                                            style={{
                                                position: "absolute",
                                                display: "block",
                                                borderStyle: "solid",
                                                whiteSpace: "nowrap",
                                                zIndex: 9999999,
                                                boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                                                backgroundColor: "rgb(249, 250, 253)",
                                                borderWidth: 1,
                                                borderRadius: 4,
                                                color: "rgb(11, 23, 39)",
                                                font: '14px / 21px "Microsoft YaHei"',
                                                padding: "7px 10px",
                                                top: 0,
                                                left: 0,
                                                transform: "translate3d(-16px, -4px, 0px)",
                                                borderColor: "rgb(216, 226, 239)",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                opacity: 0
                                            }}
                                        >
                                            Mon : 200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-header pb-0">
                            <h6 className="mb-0 mt-2">Total Order</h6>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row justify-content-between">
                                <div className="col-auto align-self-end">
                                    <div className="fs-5 fw-normal font-sans-serif text-700 lh-1 mb-1">
                                        58.4K
                                    </div>
                                    <span className="badge rounded-pill fs-11 bg-200 text-primary">
                                        <svg
                                            className="svg-inline--fa fa-caret-up fa-w-10 me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="caret-up"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            data-fa-i2svg=""
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                                            />
                                        </svg>
                                        {/* <span class="fas fa-caret-up me-1"></span> Font Awesome fontawesome.com */}
                                        13.6%
                                    </span>
                                </div>
                                <div className="col-auto ps-0 mt-n4">
                                    <div
                                        className="echart-default-total-order"
                                        data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Week 4","Week 5","Week 6","Week 7"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
                                        data-echart-responsive="true"
                                        _echarts_instance_="ec_1723181238201"
                                        style={{
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            position: "relative"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 138,
                                                height: 90,
                                                padding: 0,
                                                margin: 0,
                                                borderWidth: 0
                                            }}
                                        >
                                            <canvas
                                                data-zr-dom-id="zr_0"
                                                width={138}
                                                height={90}
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    width: 138,
                                                    height: 90,
                                                    userSelect: "none",
                                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                    padding: 0,
                                                    margin: 0,
                                                    borderWidth: 0
                                                }}
                                            />
                                        </div>
                                        <div className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-body">
                            <div className="row h-100 justify-content-between g-0">
                                <div className="col-5 col-sm-6 col-xxl pe-2">
                                    <h6 className="mt-1">Market Share</h6>
                                    <div className="fs-11 mt-3">
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center">
                                                <span className="dot bg-primary" />
                                                <span className="fw-semi-bold">Samsung</span>
                                            </div>
                                            <div className="d-xxl-none">33%</div>
                                        </div>
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center">
                                                <span className="dot bg-info" />
                                                <span className="fw-semi-bold">Huawei</span>
                                            </div>
                                            <div className="d-xxl-none">29%</div>
                                        </div>
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center">
                                                <span className="dot bg-300" />
                                                <span className="fw-semi-bold">Apple</span>
                                            </div>
                                            <div className="d-xxl-none">20%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto position-relative">
                                    <div
                                        className="echart-market-share"
                                        _echarts_instance_="ec_1723181238197"
                                        style={{
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            position: "relative"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 106,
                                                height: 106,
                                                padding: 0,
                                                margin: 0,
                                                borderWidth: 0,
                                                cursor: "default"
                                            }}
                                        >
                                            <canvas
                                                data-zr-dom-id="zr_0"
                                                width={106}
                                                height={106}
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    width: 106,
                                                    height: 106,
                                                    userSelect: "none",
                                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                    padding: 0,
                                                    margin: 0,
                                                    borderWidth: 0
                                                }}
                                            />
                                        </div>
                                        <div className="" />
                                    </div>
                                    <div className="position-absolute top-50 start-50 translate-middle text-1100 fs-7">
                                        26M
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-header d-flex flex-between-center pb-0">
                            <h6 className="mb-0">Weather</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger">
                                <button
                                    className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                    type="button"
                                    id="dropdown-weather-update"
                                    data-bs-toggle="dropdown"
                                    data-boundary="viewport"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    fdprocessedid="vpy8lj"
                                >
                                    <svg
                                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="ellipsis-h"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end border py-2"
                                    aria-labelledby="dropdown-weather-update"
                                >
                                    <a className="dropdown-item" href="#!">
                                        View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item text-danger" href="#!">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-2">
                            <div className="row g-0 h-100 align-items-center">
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="me-3"
                                            src="/img/icons/weather-icon.png"
                                            alt=""
                                            height={60}
                                        />
                                        <div>
                                            <h6 className="mb-2">New York City</h6>
                                            <div className="fs-11 fw-semi-bold">
                                                <div className="text-warning">Sunny</div>Precipitation:
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto text-center ps-2">
                                    <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">
                                        31°
                                    </div>
                                    <div className="fs-10 text-800">32° / 25°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cards