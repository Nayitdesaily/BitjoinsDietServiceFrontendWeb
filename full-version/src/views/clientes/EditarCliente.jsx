import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Check, X } from "react-feather";
import Avatar from "@components/avatar";

export default function EditarClientes({ clienteSeleccionado }) {
   const [tiposUsuario, setTiposUsuario] = useState([]);

   useEffect(() => {
      async function fetchData() {
         await axios.get("http://localhost:8000/api/tipo-usuario").then((res) => setTiposUsuario(res.data));
      }
      fetchData();
   }, []);

   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({});

   function onSubmit(data) {
      async function ActualizarCliente() {
         await axios
            .put(`http://localhost:8000/api/web/personas/${clienteSeleccionado.data.data.id}`, data)
            .then((res) => {
               if (res.status === 200) {
                  toast(
                     <div className="d-flex align-items-center gap-1">
                        <div>
                           <Avatar size="sm" color="success" icon={<Check size={12} />} />
                        </div>
                        <h5 className="p-0 mb-0">{res.data.message}</h5>
                     </div>
                  );
               } else {
                  toast(
                     <div className="d-flex align-items-center gap-1">
                        <div>
                           <Avatar size="sm" color="success" icon={<X size={12} />} />
                        </div>
                        <h5 className="p-0 mb-0">Ha ocurrido un error</h5>
                     </div>
                  );
               }
            });
      }
      ActualizarCliente();
   }

   return (
      <div>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
               <Col xs="12">
                  <Controller
                     name="tipousuario_id"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.tipousuario_id}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="tipousuario_id">Tipo Usuario</Label>
                           <Input
                              placeholder="Ingrese tipo de usuario"
                              type="select"
                              name="tipousuario_id"
                              {...parseInt(field)}
                           >
                              <option
                                 value={
                                    clienteSeleccionado.data.data.tipousuario_id
                                       ? clienteSeleccionado.data.data.tipousuario_id
                                       : ""
                                 }
                                 selected
                              >
                                 {clienteSeleccionado.data.data.tipo_usuario
                                    ? clienteSeleccionado.data.data.tipo_usuario
                                    : "Seleccione el tipo de usuario"}
                              </option>
                              {tiposUsuario
                                 .filter((tipo) => tipo.id !== clienteSeleccionado.data.data.tipousuario_id)
                                 .map((tipo) => (
                                    <option value={Number(tipo.id)} key={tipo.id}>
                                       {tipo.nombre}
                                    </option>
                                 ))}
                           </Input>
                        </FormGroup>
                     )}
                  />
               </Col>
            </Row>

            <Row>
               <Col xs="6">
                  <Controller
                     name="email"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.email}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="email">Usuario (email)</Label>
                           <Input name="email" placeholder="Ingresa tu email" type="email" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="6">
                  <Controller
                     name="nombre"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.nombre}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="nombre">Nombre</Label>
                           <Input name="nombre" placeholder="Ingresa tu nombre" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>
            </Row>

            <Row>
               <Col xs="6">
                  <Controller
                     name="apellido"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.apellido}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="apellido">Apellido</Label>
                           <Input name="apellido" placeholder="Ingresa tu apellido" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="telefono"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.telefono}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="telefono">Telefono</Label>
                           <Input name="telefono" placeholder="Ingresa tu telefono" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="ocupacion"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.ocupacion}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="ocupacion">Ocupacion</Label>
                           <Input name="ocupacion" placeholder="Ingresa tu ocupacion" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>
            </Row>

            <Row>
               <Col xs="3">
                  <Controller
                     name="consultorio_id"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.consultorio_id}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="consultorio">Consultorio</Label>
                           <Input name="consultorio_id" placeholder="Ingresa tu nombre" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="empresa_id"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.empresa_id}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="empresa">Empresas</Label>
                           <Input name="empresa_id" placeholder="Ingresa tu nombre" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>
            </Row>

            <Row>
               <Col xs="3">
                  <Controller
                     name="talla"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.talla}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="talla">Talla</Label>
                           <Input name="talla" placeholder="Ingresa tu talla" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="peso_ideal"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.peso_ideal}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="peso_ideal">Peso Ideal</Label>
                           <Input name="peso_ideal" placeholder="Ingresa tu peso ideal" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="p_grasa_ideal"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.p_grasa_ideal}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="p0grasa_ideal">% Grasa Ideal</Label>
                           <Input name="p_grasa_ideal" placeholder="Ingresa tu % grasa ideal" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="p_grasa_muscular"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.p_grasa_muscular}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="p_masa_muscular">% Masa Muscular</Label>
                           <Input
                              name="p_grasa_muscular"
                              placeholder="Ingresa tu $ grasa muscular"
                              type="text"
                              {...field}
                           />
                        </FormGroup>
                     )}
                  />
               </Col>
            </Row>

            <Row>
               <Col xs="3">
                  <Controller
                     name="gustos"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.gustos}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="gustos">Alimentos que le gustan</Label>
                           <Input name="gustos" placeholder="Ingresa tu gustos" type="text" {...field} />
                        </FormGroup>
                     )}
                  />
               </Col>

               <Col xs="3">
                  <Controller
                     name="no_gustos"
                     control={control}
                     defaultValue={clienteSeleccionado.data.data.no_gustos}
                     render={({ field }) => (
                        <FormGroup>
                           <Label for="no_gustos">Alimentos que no le gustan</Label>
                           <Input
                              name="no_gustos"
                              placeholder="Ingresa tu alimentos que no gustan"
                              type="text"
                              {...field}
                           />
                        </FormGroup>
                     )}
                  />
               </Col>
            </Row>

            <Button type="submit" color="success">
               Grabar Datos
            </Button>
         </Form>
      </div>
   );
}
